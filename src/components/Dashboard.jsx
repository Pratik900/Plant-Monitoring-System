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
import Card from 'react-bootstrap/Card';

export function Dashboard() {
  return (
    <>
      <div id="cards">
        <NavigationBar/>
        <Container className='mt-3'>
          <div id="graph">
            <LineGraph/>
          </div>

          <Card className="text-center mt-3 m-10" id="cardsh">
                <Card.Body>
                    <Card.Title>Maintenance Frequency Over Time</Card.Title>
                    <Card.Text>
                        This line graph illustrates the maintenance frequency of machines over the years. The Y-axis denotes unique machine IDs, while the X-axis represents the corresponding years when maintenance activities occurred.

                        Each line on the graph represents a specific machine, showcasing how often maintenance has been conducted on each machine throughout the observed period. The upward peaks indicate years with more frequent maintenance, offering a visual representation of the overall maintenance patterns.

                        This visualization enables a quick assessment of which machines have undergone more or less maintenance over time, providing valuable insights into maintenance trends and allowing for strategic decision-making in optimizing machine performance and reliability.
                    </Card.Text>
                </Card.Body>
            </Card>
        <Row className='mt-3 mb-3'>
          <Col>  <div  id="child-graph"> <WorkingGraph/></div> 
          <Card className="text-center mt-3 m-10" id="cardsh">
                <Card.Body>
                    <Card.Title>Working Machines Overview</Card.Title>
                    <Card.Text>
                    This bar graph provides a snapshot of the status of machines based on a binary indicator: 'Yes' signifies working machines, while 'No' indicates non-operational ones. The Y-axis represents the count of machines falling into each category, and the X-axis displays the binary status.

                    The height of the bars reveals the distribution of working and non-working machines. A higher bar for 'Yes' indicates a greater number of operational machines, while a higher bar for 'No' signifies machines requiring attention or maintenance.

                    This visualization aids in quickly assessing the proportion of working machines within the dataset, offering valuable insights into the overall health of the machinery. It serves as a useful tool for monitoring and strategizing maintenance efforts to ensure optimal operational efficiency.
                    </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col> <div  id="child-graph"> < EmergencyGraph/> </div> 
          <Card className="text-center mt-3 m-10" id="cardsh">
                <Card.Body>
                    <Card.Title>Emergency Repairs Overview</Card.Title>
                    <Card.Text>
                      This doughnut graph provides an insightful overview of emergency repair occurrences. The segments of the doughnut represent two categories: 'Emergency Repair' and 'Working' indicating whether a machine required emergency repairs. The size of each segment corresponds to the count of occurrences for each category.

                      A larger portion of the doughnut dedicated to 'Emergency Repair' signifies a higher number of instances where emergency repairs were necessary, while a larger 'Working' segment indicates a greater number of incidents where machines did not require urgent attention.

                      This visual representation is valuable for understanding the frequency of emergency repair situations, allowing for proactive measures to minimize such occurrences and enhance overall operational reliability.
                    </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        <Footer/>
      </div>
    </>
  );
}
