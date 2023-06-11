import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginPage/> }/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<HomePage/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
