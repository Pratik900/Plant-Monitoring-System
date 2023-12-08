import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function Footer(){
    return(
    <Navbar stickey="bottom" expand="lg" className='' bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Footer</Navbar.Brand>
      </Container>
    </Navbar>
    );
}