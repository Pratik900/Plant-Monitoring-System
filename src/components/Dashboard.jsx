import React from 'react';
import { WorkingGraph } from './WorkingGraph';
import { EmergencyGraph } from './EmergencyGraph';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineGraph } from './LineGraph';
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';


export function Dashboard() {
  return (
    <>
        <NavigationBar/>
      <div>
        <Container>
          <LineGraph/>
        <Row className='mt-5'>
          <Col><WorkingGraph/></Col>
          <Col><EmergencyGraph/></Col>
        </Row>
        </Container>
      </div>
        <Footer/>
    </>
  );
}
