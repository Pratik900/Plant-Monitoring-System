import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavigationBar } from './NavigationBar';
import { Footer } from "./Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import pic1 from '../images/1.jpg'
import pic2 from '../images/3.jpg'
import pic3 from '../images/4.jpg'
import "../Style/Home.css"


export function Home() {
    const navigate = useNavigate();
    const handleDash=()=>{
        navigate('/dashboard');
    }
    const handleList=()=>{
        navigate('/machine-list');
    }
    const handleLog=()=>{
        navigate('/machine-log');
    }
    return (
        <>
        <div id="App-head">
        <NavigationBar/>
            <Container>
            <Carousel className="mt-3">
                <Carousel.Item interval={1000}>
                <img alt="c1" src={pic1}/>
                    <Carousel.Caption>
                    <h3>Scheduled Maintenance</h3>
                    <p>Strategically plan preventive maintenance schedules to safeguard equipment health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img alt="c2" src={pic2}/>
                    <Carousel.Caption>
                    <h3>Work Order Management</h3>
                    <p>Streamline maintenance workflows with a user-friendly system for creating, assigning, and tracking work orders.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img alt="c3" src={pic3}/>
                    <Carousel.Caption>
                    <h3>Inventory Control</h3>
                    <p>
                        Efficiently manage spare parts and consumables, ensuring resources are readily available.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <Card className="text-center mt-3 m-10" id="cardsh">
                <Card.Body>
                    <Card.Title>Plant Monitoring System</Card.Title>
                    <Card.Text>
                    Unveiling the Future of Industrial Equipment Management
                    Welcome to a new era in industrial equipment management with our Advanced Machine Maintenance System.<br/> Our solution is more than just a tool; it's a transformative experience that reshapes the way you approach equipment maintenance, ensuring unparalleled performance and efficiency.
                    Our commitment to excellence ensures top-notch services.
                    Expertise: Backed by years of experience, we deliver unique expertise or perspective.
                    <br/>Customer Satisfaction: We prioritize your satisfaction, striving to exceed expectations.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Container>


            <Row className="justify-content-md-center mt-3 mb-3" >
                            <Col xs lg="2" className="me-5" >
                                <Card style={{ width: '18rem' }}>
                                <Card.Body id="cardsh">
                                    <Card.Text>
                                    While sleek metrics whisper the secret language of efficiency. Dive deeper into the machine with a single tap – the "Uncover Secrets" button awaits. 
                                    </Card.Text>
                                    <Button variant="dark"  onClick={()=>{
                                        handleDash();
                                    }}>Explore</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col xs lg="2" className="me-5">
                                <Card style={{ width: '18rem' }}>
                                <Card.Body id="cardsh">
                                    <Card.Text>
                                    This gateway opens a window to your entire fleet, unveiling individual profiles, and maintenance histories. Each machine has a story to tell.
                                    </Card.Text>
                                    <Button variant="dark"  onClick={()=>{
                                        handleList();
                                    }}>Logs</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col xs lg="2" className="me-5">
                                <Card style={{ width: '18rem' }}>
                                <Card.Body id="cardsh">
                                    <Card.Text>
                                    This opens a window into the specifics of each machine - its history, current performance. It's like having a personal dossier for every machine. 
                                    </Card.Text>
                                    <Button variant="dark" onClick={()=>{
                                        handleLog();
                                    }}>Append</Button>
                                </Card.Body>
                            </Card>
                    </Col>
            </Row>
            <Footer/>
        </div>
        </>
    );
}
