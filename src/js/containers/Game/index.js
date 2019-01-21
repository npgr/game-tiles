import React from 'react';
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { Container, Row, Col, Button } from 'reactstrap'
import { setStep } from '../../actions/user'
import { addStats } from '../../actions/stats'
//import { Container } from './styles'

const mapStateToProps = ({ user: { user, steps } }) => ({ user, steps })
const mapDispatchToProps = { setStep, addStats }

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    incrementStep: ({ steps, setStep }) => () => setStep(steps + 1),
    endGame: ({ user, steps, history, addStats }) => () => {
      addStats({ user, steps, new: true })
      history.push('/stats')
    }
  })
);

const Tiles = () => <div>Tiles</div>

export default enhance(props => (
  <Container>
    <Row>
      <Col>Step <span>{props.steps}</span></Col>
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
