import './App.css';
import React from 'react';
import Parties from './Components/Parties';
import Swot from './Components/Swot';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Navbar from './Components/Navbar';


function App() {
    
    return (
       <>
                <Navbar/>
                <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path='home' element={<Home/>}/>
                <Route path="swot" element={<Swot/>} />
                <Route path="parties" element={<Parties/>} />
                </Routes>
       </>
    );
}

export default App;
