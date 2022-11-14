import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Register from '../src/components/Register/Register';
import Home from '../src/components/Home/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web3 from "web3";
import HomePage from '../src/components/Home/Homepage'
import LandingPage from '../src/components/Landing/Landingpage'
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";



function App() {
  return (
    <div className='bg-indigo-600 w-full h-screen'>
    <Router>
    <Navbar />

  

    <ToastContainer theme="light" autoClose={5000} />

    <Routes>
      <Route path="/" exact={true} element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Home />} />
      
    </Routes>
  </Router>
  </div>
  );

}



export default App;
