import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { Container, Row as RowStrap, Col } from 'reactstrap'
import Tiles from '../../components/Tiles'
import styled from 'styled-components'

const Row = styled(RowStrap)`
  margin-top: 10px;
`

const mapStateToProps = ({ user: { steps } }) => ({ steps })

const enhance = compose(
  connect(mapStateToProps)
);

export default enhance(props => (
  <Container>
    <Row>
      <Col>
        <strong>Step <span>{props.steps}</span></strong>
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Tiles />
      </Col>
    </Row>
  </Container>
));
