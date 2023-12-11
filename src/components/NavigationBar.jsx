import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../Utils/TokenUtils";
import pic3 from '../images/logo.png'

export function NavigationBar() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate("/");
    }

    return (
        <Navbar sticky="top" expand="lg" bg="info" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/Home"><img alt="c1" src={pic3}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <LinkContainer  to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/machine-list">
                            <Nav.Link>Machine List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/machine-log">
                            <Nav.Link>Machine Logs</Nav.Link>
                        </LinkContainer>
                    </Nav>
                   
                <Button variant="outline-dark" onClick={handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}