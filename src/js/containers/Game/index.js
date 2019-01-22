import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { Container, Row, Col } from 'reactstrap'
import Tiles from '../../components/Tiles'

const mapStateToProps = ({ user: { steps } }) => ({ steps })

const enhance = compose(
  connect(mapStateToProps)
);

export default enhance(props => (
  <Container>
    <Row>
      <Col>Step <span>{props.steps}</span></Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Tiles />
      </Col>
    </Row>
  </Container>
));
