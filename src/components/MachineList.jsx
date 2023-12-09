import {  Button, Container,Table } from "react-bootstrap";
import { deleteMachine, fetchMachines } from "../services/MachineService"
import { useEffect,useState } from "react";
import { Header } from "./Header";
import { AlertComp } from "./AlertComp";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";


export function MachineList(){

    const [machine,setMachine]=useState([]);
    const navigate = useNavigate();

    async function populateMachineState(){
        try{
            const data=await fetchMachines()
            setMachine(data.Details);
        } catch(error){
            console.log(error);
        } 
    }

    useEffect(()=>{
        populateMachineState();
    },[]);

    const handleDeleteClick=async(machno)=>{
        try{
            await deleteMachine(machno);
            populateMachineState();
        } catch(error){
            console.log(error);
        }
    }

    return(
        
        <Container>
            <Header text="Machine Maintanance Data"></Header>
            {machine.length!==0?<Table className="mt-4">
            
                <thead>
                    <tr>
                        <th>M-ID</th>
                        <th>Maintanance Date</th>
                        <th>Emergency repair</th>
                        <th>Working</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        machine.map((m)=>{
                            return (
                                <tr>
                                    <td>{m.machno}</td>
                                    <td>{m.machdate = moment(m.machdate).format('YYYY-MM-DD')}</td>
                                    <td>{m.emergenyrepair}</td>
                                    <td>{m.working}</td>
                                    <td><Button variant="danger" onClick={()=>{
                                        handleDeleteClick(m.machno);
                                    }}>Delete</Button> &#160;
                                        <Button onClick={()=>{
                                            navigate(`/edit/${m.machno}`);
                                        }}>Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>:<AlertComp text="Oh snap! Data not found..!"></AlertComp>}
            
        </Container>

    );
}

