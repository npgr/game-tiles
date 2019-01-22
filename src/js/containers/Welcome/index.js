import React from 'react';
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { Container, Row as RowStrap, Col, Button } from 'reactstrap'
import { setUser } from '../../actions/user'
import styled from 'styled-components'

const mapStateToProps = ({ user: { user } }) => ({ user })
const mapDispatchToProps = { setUser }

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    changeUser: ({ setUser }) => val => setUser(val)
  })
);

const Row = styled(RowStrap)`
  margin-top: 20px;
`

export default enhance(props => (
  <Container>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        Welcome to Game of Tiles, please type your name or alias to start
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <input onChange={e => props.changeUser(e.target.value)} />
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Button
          color="primary"
          disabled={!props.user}
          onClick={() => props.history.push('/game')}
        >
          Start Game
        </Button>
      </Col>
    </Row>
  </Container>
));
