import React from 'react';
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { Container, Row, Col, Button } from 'reactstrap'
import { setStep } from '../../actions/user'
import StatsTable from '../../components/StatsTable'
//import { Container } from './styles'

const mapStateToProps = ({ stats }) => ({ stats })
const mapDispatchToProps = { setStep }

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    newGame: ({ setStep, history }) => () => {
      setStep(1)
      history.push('/game')
    }
  })
);

//const StatsTable = () => <div>Stats Table</div>

export default enhance(props => (
  <Container>
    <Row>
      <StatsTable stats={props.stats}/>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Button color="primary" onClick={() => props.newGame()}>
          New Game
        </Button>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Button color="secondary" onClick={() => props.history.push('/end')}>
          End Game
        </Button>
      </Col>
    </Row>
  </Container>
));
