import {
    Navbar, 
    Container,
    Nav,
} from "react-bootstrap";

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand href="#"><h3>VacantionChoice</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto" navbarScroll>
                    <Nav.Link as={Link} to="/"><h4>Home</h4></Nav.Link>
                    <Nav.Link as={Link} to="/Vacantion"><h4>Vacantion</h4></Nav.Link>
                    <Nav.Link as={Link} to="/landmarks"><h4>Landmarks</h4></Nav.Link>
                    <Nav.Link as={Link} to="/contacts"><h4>Contacts</h4></Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavBar;