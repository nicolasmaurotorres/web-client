import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
    constructor(props){
        super(props);

        this._logout = this._logout.bind(this);
    }

    _logout(e){
        e.preventDefault();
        this.props.logout();
    }


    render() {
        const { isAuthenticated } = this.props.auth;
        const userLinks = (
            <Nav pullRight>
                <LinkContainer to='#' onClick={ this._logout }>
                    <NavItem eventKey={1}>Logout </NavItem>
                </LinkContainer>
            </Nav>
        );
        const guestLinks = (
            <Nav pullRight>
                <LinkContainer to='signup'>
                    <NavItem eventKey={1}>Sign Up </NavItem>
                </LinkContainer>
                <LinkContainer to='signin'>
                    <NavItem eventKey={2}>Sign In </NavItem>
                </LinkContainer>
            </Nav>
        );

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Inicio </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    { isAuthenticated ? userLinks : guestLinks}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{ logout })(NavigationBar);