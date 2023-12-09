import { Alert, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Style/MachineLog.css";
import { useState } from "react";
import { saveMachine } from "../services/MachineService";
import { Header } from "./Header";

export function MachineLog() {
  const [formData, setFormData] = useState({
    machno: "",
    machdate: "",
    emergenyrepair: "",
    working: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await saveMachine(formData);setFormData({machno: "",machdate: "",emergenyrepair: "",working: "",})
      setisSubmitted(true);
      setTimeout(() => {
        setisSubmitted(false);
      }, 1500);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (


      <Container>
          <Header text="Insert Machine Log"></Header>
          <div className="Center-Page">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Machine ID</Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted?formData.machno:null}
                  placeholder="Enter Machine id"
                  name="machno"
                  onKeyUp={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Machine Date</Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted?formData.machdate:null}
                  placeholder="Enter Machine name"
                  name="machdate"
                  onKeyUp={handleChange}
                />
                <Form.Text className="text-muted">
                  Date in this Format: (YYYY-MM-DD)
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Emergency Repair</Form.Label>
                <Form.Control
                  value={isSubmitted?formData.emergenyrepair:null}
                  type="text"
                  placeholder="Yes/No"
                  name="emergenyrepair"
                  onKeyUp={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Working</Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted?formData.working:null}
                  placeholder="Yes/No"
                  name="working"
                  onKeyUp={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Group className="mb-3">
                {isSubmitted ? (
                  <Alert variant="success">Details Inserted</Alert>
                ) : null}
              </Form.Group>
            </Form>
          </div>
      </Container>

  );
}
