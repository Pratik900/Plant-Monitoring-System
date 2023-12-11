import { Alert, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { FetchMachineByMachno, updateMachine } from "../services/MachineService";
import { AlertComp } from "./AlertComp";
import moment from "moment/moment";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import "../Style/MachineLog.css"

export function MachineUpadte() {
  const params = useParams()
  const [formData, setFormData] = useState({
    machno: "",
    machdate: "",
    emergenyrepair: "",
    working: "",
  });
  const [isSubmitted,setisSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmitted(true);
    setTimeout(() => {
      setisSubmitted(false);
    }, 1500);
    try {
        const result = await updateMachine(formData,params.machno);
        console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const populateMachineState=async()=>{
    try{
        const result = await FetchMachineByMachno(params.machno);
        setFormData(result.Details);
    }catch(error){
        console.log(error);
    }
  }

  const dateData=()=>{
    try{
        var dateString = formData.machdate;
        var formattedDate = moment(dateString).format('YYYY-MM-DD');
        return formattedDate
    }catch(error){
        console.log(error);
    }
  }

  useEffect(()=>{
    populateMachineState();
  },[])


  return (
    <>
      <div id="cards">
      <NavigationBar/>
      <Header text="Update Machine Log"></Header>
    <div className="Center-Page" >
      <Container>
        {FormData?<Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Machine ID</Form.Label>
            <Form.Control
              type="text"
              value={formData.machno}
              placeholder="Enter Machine id"
              name="machno"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Machine Date</Form.Label>
            <Form.Control
              type="Date"
              value={dateData(formData.machdate)}
              placeholder="Enter Machine name"
              name="machdate"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Date in this Format: (YYYY-MM-DD)
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Emergency Repair</Form.Label>
            <Form.Control
              value={formData.emergenyrepair}
              type="text"
              placeholder="Yes/No"
              name="emergenyrepair"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Working</Form.Label>
            <Form.Control
              type="text"
              value={formData.working}
              placeholder="Yes/No"
              name="working"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Update
          </Button>
          <Form.Group className="mb-3">
          {isSubmitted ? (
              <Alert variant="success">Details Inserted</Alert>
            ) : null}
          </Form.Group>
        </Form>:<AlertComp text="No Data Found..!"></AlertComp>}
      </Container>
    </div>
    <Footer/>
      </div>
      
    </>

    
  );
}
 