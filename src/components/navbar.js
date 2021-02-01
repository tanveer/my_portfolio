import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation