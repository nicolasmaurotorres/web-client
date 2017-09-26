import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Inicio </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link to="/signup"> Sign Up </Link>
                        </NavItem>
                        <NavItem eventKey={2} >
                            <Link to="/signin"> Sign In </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;