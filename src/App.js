import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MachineUpadte } from './components/MachineUpdate';
import { Dashboard } from "./components/Dashboard";
import { MachineList } from './components/MachineList';
import { MachineLog } from './components/MachineLog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/machine-list" element={<MachineList/>}></Route>
        <Route path="/machine-log" element={<MachineLog/>}></Route>
        <Route path="/edit/:machno" element={<MachineUpadte/>}></Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
