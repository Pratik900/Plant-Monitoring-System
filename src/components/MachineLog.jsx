import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import '../Style/MachineLog.css';
import { useEffect,useState } from "react";

export function MachineLog() {
    const [fromData,setFormData]=useState({machno:"",machdate:"",emergenyrepair:"",working:""});

    const handleChange=(e)=>{
        setFormData({...fromData,[e.target.machno]:e.targer.value});

    }
  return (
    <div className="Center-Page">
        <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Machine ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Machine id" name="machno"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Machine Date</Form.Label>
            <Form.Control type="text" placeholder="Enter Machine name" name="machdate"/>
            <Form.Text className="text-muted">
            Date in this Format: (YYYY-MM-DD) 
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Emergency Repair</Form.Label>
            <Form.Control type="text" placeholder="Enter Emergency repair" name="emergenyrepair"/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Working</Form.Label>
            <Form.Control type="text" placeholder="Enter Working" name="working" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
