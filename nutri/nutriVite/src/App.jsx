import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAdmin from './components/LoginAdmin'; 
import { NutriPage } from './pages/nutri1';
import { Nutri2Page } from './pages/nutriU';
import { TipoIMCListPage } from './pages/TipoIMCListPage';
import { TipoIMCFormPage } from './pages/TipoIMCFormPage';
import { EjercicioListPage } from './pages/EjercicioListPage';
import { EjercicioFormPage } from './pages/EjercicioFormPage';
import { ComidaListPage } from './pages/ComidaListPage';
import { ComidaFormPage } from './pages/ComidaFormPage';
import { AsignacionComidaListPage } from './pages/AsignacionComidaListPage';
import { AsignacionComidaFormPage } from './pages/AsignacionComidaFormPage';
import { AsignacionEjercicioListPage } from './pages/AsignacionEjercicioListPage';
import { AsignacionEjercicioFormPage } from './pages/AsignacionEjercicioFormPage';
import { CategoriaComidaListPage } from "./pages/CategoriaComidaListPage";
import { CategoriaComidaFormPage } from "./pages/CategoriaComidaFormPage";
import { Navigations } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/navigations" element={<Navigations />} />
          <Route path="/nutritec" element={<NutriPage />} />
          <Route path="/nutritec-create" element={<Nutri2Page/>} />
          <Route path="/nutritec/:id" element={<Nutri2Page/>} />
          <Route path="/tipoimc" element={<TipoIMCListPage/>} />
          <Route path="/tipoimc-create" element={<TipoIMCFormPage />} />
          <Route path="/tipoimc/:id" element={<TipoIMCFormPage />} />
          <Route path="/ejercicio" element={<EjercicioListPage />} />
          <Route path="/ejercicio-create" element={<EjercicioFormPage />} />
          <Route path="/ejercicio/:id" element={<EjercicioFormPage />} />
          <Route path="/comida" element={<ComidaListPage />} />
          <Route path="/comida-create" element={<ComidaFormPage />} />
          <Route path="/comida/:id" element={<ComidaFormPage />} />
          <Route path="/asignacion-ejercicio" element={<AsignacionEjercicioListPage />} />
          <Route path="/asignacion-ejercicio-create" element={<AsignacionEjercicioFormPage />} />
          <Route path="/asignacion-ejercicio/:id" element={<AsignacionEjercicioFormPage />} />
          <Route path="/asignacionComida" element={<AsignacionComidaListPage />} />
          <Route path="/asignacionComida-create" element={<AsignacionComidaFormPage />} />
          <Route path="/asignacionComida/:id" element={<AsignacionComidaFormPage />} />
          <Route path="/categoriaComida" element={<CategoriaComidaListPage />} />
          <Route path="/categoriaComida-create" element={<CategoriaComidaFormPage />} />
          <Route path="/categoriaComida/:id" element={<CategoriaComidaFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
