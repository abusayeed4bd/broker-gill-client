import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky='top' className='shadow-sm' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/services">Services</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>

                    </Nav>
                    <Nav>
                        <CustomLink to="/login">Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;