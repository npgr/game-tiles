import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose';
import { Container, Row as RowStrap, Col, Button } from 'reactstrap'
import { setStep } from '../../actions/user'
import StatsTable from '../../components/StatsTable'

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

const Row = styled(RowStrap)`
  margin-top: 20px;
`

export default enhance(props => (
  <Container>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <StatsTable stats={props.stats}/>
      </Col>
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
