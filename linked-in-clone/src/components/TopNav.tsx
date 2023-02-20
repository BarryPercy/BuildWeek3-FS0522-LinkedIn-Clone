import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsLinkedin} from 'react-icons/bs'
const TopNav = ()=>{
    return(
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><BsLinkedin/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="#link">Home</Nav.Link>
                    <Nav.Link href="#link">My Network</Nav.Link>
                    <Nav.Link href="#link">Jobs</Nav.Link>
                    <Nav.Link href="#link">Messaging</Nav.Link>
                    <Nav.Link href="#link">Notifications</Nav.Link>
                    <NavDropdown title="Me" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopNav