import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

export const NavBar = ( {toggleCategory} ) => {

    
    const handleClickCategory = ( category ) => {
       toggleCategory(category);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top" >
                <Container fluid>
                    {/* <Navbar.Brand>News API</Navbar.Brand> */}

                    <Navbar bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand>
                            <img
                            alt=""
                            src="https://cdn.pixabay.com/photo/2014/04/02/17/08/globe-308065_960_720.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                        News API
                        </Navbar.Brand>
                        </Container>
                    </Navbar>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Nav>
                        <Nav.Link onClick = { () => handleClickCategory(0)}>Inicio</Nav.Link>
                        <Nav.Link onClick = { () => handleClickCategory(1) }>Economía</Nav.Link>
                        <Nav.Link onClick = { () => handleClickCategory(2) }>Entretenimiento</Nav.Link>
                        <Nav.Link onClick = { () => handleClickCategory(3) }>Negocios</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
        
    )
}
