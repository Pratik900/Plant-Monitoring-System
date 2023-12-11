import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../services/AdminService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ phone: "", password: "" });
    const[loginError,setLoginError]=useState();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
             console.log(result);
            localStorage.setItem("token", result.token);

            if(result.token!=null)
                navigate("/home");
            else{
                setLoginError(true);
            }
        }
        catch (error) {
            console.log(error);
             setLoginError(true);
        }
    }
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className="shadow-sm" // Add shadow
                                style={{ transition: 'all 0.2s' }} // Smooth transition
                                onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'} // Hover effect
                                onMouseOut={(e) => e.target.style.boxShadow = 'none'} // Remove shadow on hover out
                            >
                                Login
                            </Button>
                        </div>
                    </Form>

                    {loginError ? <Alert variant="danger" className="mt-3">Invalid phone or password</Alert> : null}
                </Col>
            </Row>
        </Container>
        
    )
}