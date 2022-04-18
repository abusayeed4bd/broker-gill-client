import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../../../CustomLink';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar sticky='top' className='shadow-sm nav-bar' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/"> BROKER GILL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/services">Services</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>

                    </Nav>
                    <Nav>
                        {
                            user ? <button onClick={handleSignOut} className='logout-btn'>sign out</button> : <CustomLink to="/login">Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;