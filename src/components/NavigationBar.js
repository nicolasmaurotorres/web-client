import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Inicio </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to='signup'>
                            <NavItem eventKey={1}>Sign Up </NavItem>
                        </LinkContainer>
                        <LinkContainer to='signin'>
                            <NavItem eventKey={2}>Sign In </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;