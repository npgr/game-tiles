import React from 'react';
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { Container, Row, Col, Button } from 'reactstrap'
import { setUser } from '../../actions/user'
//import { Container } from './styles'

const mapStateToProps = ({ user: { user } }) => ({ user })
const mapDispatchToProps = { setUser }

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    changeUser: ({ setUser }) => val => setUser(val)
  })
);

export default enhance(props => (
  <Container>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        Welcome to Game of Tiles, please type your name or alias to start Game
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <input onChange={e => props.changeUser(e.target.value)} />
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Button color="primary" disabled={!props.user}>Start Game</Button>
      </Col>
    </Row>
  </Container>
));
