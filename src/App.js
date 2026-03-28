import React, {useState, useEffect} from "react"; 
import {FaMusic, FaCompactDisc, FaSpinner} from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Buscador from "./components/Buscador";
import DetalleAlbum from "./components/DetalleAlbum";
import "./App.css";


const audioAPI = axios.create({
  baseURL: "https://www.theaudiodb.com/api/v1/json/2" 
});

function App() {
  
  return(
    <>
    <Header />
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
        <Routes>
          <Route path="/" element={<Buscador />} />
          <Route path="/album/:id" element={<DetalleAlbum />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;