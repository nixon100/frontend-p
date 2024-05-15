import logo from './logo.svg';
// import './App.css';
import './style.css'
import { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from './Pages/User';
import Add from './Pages/Add';
import Update from './Pages/Update';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;