import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Navbar color="light" light>
        <NavbarBrand>Tile Game</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {this.props.user}
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = ({
  user: { user }
}) => ({ user });

export default connect(mapStateToProps)(Header);
