import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavigationBar } from './NavigationBar';
import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
import "../Style/Home.css"

export function About() {
  return (
    <>
      <div id="cards">
        <NavigationBar/>
        <Container className='mb-2'>
        <Card className="text-center mt-3 m-10" id="cardsh">
                <Card.Body>
                    <Card.Title>About US</Card.Title>
                    <Card.Text>
                    Welcome to our team of dedicated professionals passionate about reshaping the landscape of machine maintenance. We pride ourselves on blending innovation, expertise, and collaboration to drive meaningful advancements in the industry.

                    Our team is a diverse tapestry of skills, with members bringing a wealth of experience in engineering, data analytics, and proactive maintenance strategies. We believe in going beyond conventional approaches, aiming to transform machine maintenance into a proactive, efficient, and future-ready endeavor.

                    In our projects, we focus on key areas such as implementing cutting-edge technologies, devising proactive maintenance strategies, and leveraging data-driven analyses for enhanced efficiency. Our achievements extend beyond completed projects, encapsulating tangible impacts on operational reliability, cost-effectiveness, and overall client satisfaction.

                    As stewards of technological expertise, we navigate the intersection of innovation and practicality, utilizing state-of-the-art tools and methodologies to offer comprehensive maintenance solutions. Our success stories narrate not just project milestones but the successful resolution of complex challenges and the delivery of results that consistently exceed expectations.

                    For those interested in learning more about our transformative journey or exploring collaboration opportunities, we invite you to connect with us. Join us on this exciting voyage to redefine the future of machine maintenance.

                    </Card.Text>
                </Card.Body>
            </Card>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                             
        </Container>
        < Footer/>
      </div>
    </>
  );
}
