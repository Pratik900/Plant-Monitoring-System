import { Button, Container,Table } from "react-bootstrap";
import { deleteMachine, fetchMachines } from "../services/MachineService"
import { useEffect,useState } from "react";

export function MachineList(){

    const [machine,setMachine]=useState([]);

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
            <Table className="mt-4">
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
                                    <td>{m.machdate = new Date(m.machdate).toUTCString()}</td>
                                    <td>{m.emergenyrepair}</td>
                                    <td>{m.working}</td>
                                    <td><Button variant="danger" onClick={()=>{
                                        handleDeleteClick(m.machno);
                                    }}>Delete</Button> &#160;
                                        <Button>Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </Container>

    );
}