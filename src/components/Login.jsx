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
        <div className="App-header">
                <Container className="d-flex justify-content-center mt-5" id="cc">
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Label id="heads">Login</Form.Label>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label id="labeln">User Name</Form.Label>
                                <Form.Control id="lab" type="text" placeholder="Enter Username" name="phone" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label id="labeln">Password</Form.Label>
                                <Form.Control id="lab" type="password" placeholder="Password" name="password" onChange={handleChange} />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="dark" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>

                        {loginError ? <Alert variant="danger"id="labeln" className="mt-5 ">Invalid Username or password</Alert> : null}
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}