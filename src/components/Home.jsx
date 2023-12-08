import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import pic1 from '../images/1.jpg'
import pic2 from '../images/3.jpg'
import pic3 from '../images/4.jpg'


export function Home() {
    return (
        <>
            <Container>
            <Carousel className="mt-3">
                <Carousel.Item interval={1000}>
                <img alt="c1" src={pic1}/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img alt="c2" src={pic2}/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img alt="c3" src={pic3}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Container>

            <Card className="text-center mt-3">
                <Card.Body>
                    <Card.Title>Plant Monitoring System</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel harum tenetur corrupti sed. Sapiente maxime repudiandae ipsam est inventore <br/> accusantium voluptatem error minus iusto dolores aliquid eveniet, ipsa porro temporibus fuga similique rerum magni sunt possimus earum iure ut? Autem,<br/> amet dolorum incidunt hic sunt voluptates dignissimos corrupti eius modi?
                    </Card.Text>
                    <Button href="/dashboard">Dashboard</Button>
                </Card.Body>
            </Card>
        </>
    );
}
