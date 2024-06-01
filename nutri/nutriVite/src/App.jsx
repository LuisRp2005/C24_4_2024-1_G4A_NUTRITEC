import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NutriPage } from './pages/nutri1';
import { Nutri2Page } from './pages/nutriU';
import { TipoIMCListPage } from './pages/TipoIMCListPage';
import { TipoIMCFormPage } from './pages/TipoIMCFormPage';
import { EjercicioListPage } from './pages/EjercicioListPage';
import { EjercicioFormPage } from './pages/EjercicioFormPage';
import { Navigations } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigations />
        <Routes>
          <Route path="/" element={<Navigate to="/nutritec" />} />
          <Route path="/nutritec" element={<NutriPage />} />
          <Route path="/nutritec-create" element={<Nutri2Page />} />
          <Route path="/nutritec/:id" element={<Nutri2Page />} />
          <Route path="/tipoimc" element={<TipoIMCListPage />} />
          <Route path="/tipoimc-create" element={<TipoIMCFormPage />} />
          <Route path="/tipoimc/:id" element={<TipoIMCFormPage />} />
          <Route path="/ejercicio" element={<EjercicioListPage />} />
          <Route path="/ejercicio-create" element={<EjercicioFormPage />} />
          <Route path="/ejercicio/:id" element={<EjercicioFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
