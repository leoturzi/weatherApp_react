import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ToggleOpt from '../../components/ToggleOpt';
import './header.css';

function Header() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse
                    id='navbarScroll'
                    className='justify-content-end'
                >
                    <Nav
                        className='my-2 my-lg-0 '
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown
                            title='Opciones'
                            id='navbarScrollingDropdown'
                            align='end'
                        >
                            <ToggleOpt optionName='Farenheit' />
                            <ToggleOpt optionName='English' />
                            <ToggleOpt optionName='Dark Mode' />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
