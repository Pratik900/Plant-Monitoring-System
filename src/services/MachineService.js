import axios from "axios";

export async function fetchMachines(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/machine");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveMachine(machinedata){
    try {
        const response=await axios.post("http://127.0.0.1:4900/machine",machinedata);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}