import { Button, Container,Table } from "react-bootstrap";
import { fetchMachines } from "../services/MachineService"
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
                                    <td>{m.machdate}</td>
                                    <td>{m.emergenyrepair}</td>
                                    <td>{m.working}</td>
                                    <td><Button variant="danger">Delete</Button> &#160;
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