import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MachineList } from './components/MachineList';
import { MachineLog } from './components/MachineLog';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/machine-list" element={<MachineList/>}></Route>
        <Route path="/machine-log" element={<MachineLog/>}></Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
