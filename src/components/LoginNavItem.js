import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Login = ({ isLoggedIn, userName, onClickLogin, onClickLogout }) => {
  if (isLoggedIn) {
    return <NavDropdown eventKey={1} title={ userName } id="basic-nav-dropdown">
      <MenuItem eventKey={1.1}></MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={1.2} href="#" onClick={e => {
        e.preventDefault();
        onClickLogout();
      }}>
        Logout
      </MenuItem>
    </NavDropdown>;
  } else {
    return <NavItem href="#" onClick={e => {
      e.preventDefault();
      onClickLogin();
    }}>
      Login
    </NavItem>;
  }
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Login;
