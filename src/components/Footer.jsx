import { Navbar,Nav, Container } from 'react-bootstrap';
import "../Style/NavigationBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer(){
    return(
      <Navbar  expand="lg" data-bs-theme="dark" className="navs">
      <Container >
        <Navbar.Brand href="#" id="footstyle" className="text-center">© 2023 Copyright: Machinemaintenace.com</Navbar.Brand>

        {/* Social Media Icons */}
        <div className="d-flex">
          <Nav.Link href="#"  target="_blank" rel="noopener noreferrer" className="text-light me-3"><FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3b5998' }}/></Nav.Link>
          <Nav.Link href="#" target="_blank" rel="noopener noreferrer" className="text-light me-3"><FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#00acee' }} /></Nav.Link>
          <Nav.Link href="#" target="_blank" rel="noopener noreferrer" className="text-light"><FontAwesomeIcon icon={faInstagram} size="2x"  style={{ color: '#c13584' }}/></Nav.Link>
        </div>
      </Container>
    </Navbar>
    );
}