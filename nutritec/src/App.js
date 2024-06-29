import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/home';
import ViewEjercicio from './pages/ViewEjercicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewComida from './pages/ViewComida';
import ViewComidaDesig from './pages/ViewComidaDesig';
import Usuario from './pages/usuario';
import Formulario from './pages/formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import NutriIA from './pages/NutriIA';
import ViewEjercicioDesig from './pages/ViewEjercicioDesig';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

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
          <Route path='/viewComidaDesig' element={<ViewComidaDesig/>}></Route>
          <Route path='/viewEjercicioDesig' element={<ViewEjercicioDesig/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
