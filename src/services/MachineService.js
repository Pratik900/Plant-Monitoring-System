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
export async function deleteMachine(machno){
    try{
        const response = await axios.delete(`http://127.0.0.1:4900/machine/${machno}`)
        return response.data;
    }catch(error){
        console.log(error)
    }
}
export async function FetchMachineByMachno(machno){
    try{
        const response = await axios.get(`http://127.0.0.1:4900/machine/${machno}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}
export async function updateMachine(updateData,machno){
    try{
        const response = await axios.put(`http://127.0.0.1:4900/machine/${machno}`,updateData)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}
export async function FetchMachineByCountno(count){
    try{
        const response = await axios.get(`http://127.0.0.1:4900/countno/${count}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}
export async function FetchMachineCountByYes(count){
    try{
        const response = await axios.get(`http://127.0.0.1:4900/countyes/${count}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}

export async function FetchMachineByno(countno){
    try{
        const response = await axios.get(`http://127.0.0.1:4900/emergencycountno/${countno}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}
export async function FetchMachineByYes(countyes){
    try{
        const response = await axios.get(`http://127.0.0.1:4900/emergencycountyes/${countyes}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}