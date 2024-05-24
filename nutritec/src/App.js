import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/home';
import ViewEjercicio from './pages/ViewEjercicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewComida from './pages/ViewComida';
import Usuario from './pages/usuario';
import Formulario from './pages/formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import NutriIA from './pages/NutriIA';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/viewEjercicio" element={<ViewEjercicio />} />
          <Route path="/viewComida" element={<ViewComida/>} />
          <Route path="/usuario" element={<Usuario/>} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path='/NutriIA' element={<NutriIA/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
