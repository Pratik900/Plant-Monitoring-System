import React from 'react';
import { WorkingGraph } from './WorkingGraph';
import { EmergencyGraph } from './EmergencyGraph';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineGraph } from './LineGraph';
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';
import "../Style/Home.css"

export function Dashboard() {
  return (
    <>
      <div id="cards">
        <NavigationBar/>
        <Container>
          <LineGraph/>
        <Row className='mt-3 mb-3'>
          <Col><WorkingGraph/></Col>
          <Col><EmergencyGraph/></Col>
        </Row>
        </Container>
        <Footer/>
      </div>
    </>
  );
}
