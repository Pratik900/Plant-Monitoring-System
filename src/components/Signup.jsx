import { Alert, Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { register } from "../services/AdminService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Signup.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from "react-router-bootstrap";
export function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "",phone: "", password: "",email: "" });
    const[loginError,setLoginError]=useState();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await register(formData);
            setFormData({
                name: "",
                phone: "",
                password: "",
                email: "",
              });
            console.log(result);
                navigate("/");
        }
        catch (error) {
            console.log(error);
             setLoginError(true);
        }
    }
    return (
        <div className="App-header">
                <Container className="d-flex justify-content-center mt-5" id="cc">
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Label id="heads">Signup</Form.Label>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label id="labeln">User Name</Form.Label>
                                <Form.Control id="lab" required type="text" placeholder="Enter Username" name="phone" onKeyUp={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label id="labeln">Phone</Form.Label>
                                <Form.Control id="lab" required type="password" placeholder="Password" name="name" onKeyUp={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label id="labeln">Password</Form.Label>
                                <Form.Control id="lab" required type="password" placeholder="Password" name="password" onKeyUp={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label id="labeln">Email</Form.Label>
                                <Form.Control id="lab" required type="password" placeholder="Password" name="email" onKeyUp={handleChange} />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="dark" type="submit">
                                    Signup
                                </Button>
                            </div>
                            <LinkContainer className="me-4" id="abt" to="/">
                            <Nav.Link>already have account? Login</Nav.Link>
                        </LinkContainer>
                        </Form>
                        {loginError ? <Alert variant="danger"id="labeln" className="mt-5 ">Invalid Inupt</Alert> : null}
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}