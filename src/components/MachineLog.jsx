import { Alert, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Style/MachineLog.css";
import { useState } from "react";
import { saveMachine } from "../services/MachineService";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

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
      const result = await saveMachine(formData);
      setFormData({
        machno: "",
        machdate: "",
        emergenyrepair: "",
        working: "",
      });
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
    <>
      <div id="cards">
        <NavigationBar />
        <Container>
          <Header text="Insert Machine Log"></Header>
          <div className="Center-Page">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Machine ID</Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted ? formData.machno : null}
                  placeholder="Enter Machine id"
                  name="machno"
                  required
                  onKeyUp={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Machine Date</Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted ? formData.machdate : null}
                  placeholder="Enter Machine name"
                  name="machdate"
                  required
                  onKeyUp={handleChange}
                />
                <Form.Text className="text-muted">
                  Date in this Format: (YYYY-MM-DD)
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Emergency Repair</Form.Label>
                <Form.Select
                  value={isSubmitted ? formData.emergenyrepair : null}
                  onChange={handleChange}
                  name="emergenyrepair"
                  required
                >
                  <option value="" disabled>
                    Select Yes/No
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Working</Form.Label>
                <Form.Select
                  value={isSubmitted ? formData.working : null}
                  onChange={handleChange}
                  name="working"
                  required
                >
                  <option value="" disabled>
                    Select Yes/No
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>

              <Button variant="dark" id="btn" type="submit">
                Append
              </Button>

              <Form.Group className="mb-3">
                {isSubmitted ? (
                  <Alert variant="success">Details Inserted</Alert>
                ) : null}
              </Form.Group>
            </Form>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}
