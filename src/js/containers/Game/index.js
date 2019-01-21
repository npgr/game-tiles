import React from 'react';
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { Container, Row, Col, Button } from 'reactstrap'
import { setStep } from '../../actions/user'
//import { Container } from './styles'

const mapStateToProps = ({ user: { step } }) => ({ step })
const mapDispatchToProps = { setStep }

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    incrementStep: ({ setStep, step }) => () => setStep(step + 1),
    endGame: ({ history }) => () => {
      //Update stats
      history.push('/stats')
    }
  })
);

const Tiles = () => <div>Tiles</div>

export default enhance(props => (
  <Container>
    <Row>
      <Col>Step <span>{props.step}</span></Col>
    </Row>
    <Tiles />
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Button color="primary" onClick={() => props.incrementStep()}>
          Next Step
        </Button>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Button
          color="secondary"
          onClick={props.endGame}>End Game</Button>
      </Col>
    </Row>
  </Container>
));
