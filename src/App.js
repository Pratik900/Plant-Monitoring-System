import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MachineList } from './components/MachineList';
import { MachineLog } from './components/MachineLog';
import { Home } from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/machine-list" element={<MachineList/>}></Route>
        <Route path="/machine-log" element={<MachineLog/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>  
  );
}

export default App;
