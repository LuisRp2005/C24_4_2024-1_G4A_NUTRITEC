import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { NutriPage } from './pages/nutri1';
import { Nutri2Page } from './pages/nutriU';
import {Navigations} from './components/Navigation'
import {Toaster} from 'react-hot-toast';
import './App.css';

function App(){
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Navigations/>
        <Routes>
          <Route path="/" element={<Navigate to="/nutritec"/>} />
          <Route path="/nutritec" element={<NutriPage />} />
          <Route path="/nutritec-create" element={<Nutri2Page />} />
          <Route path="/nutritec/:id" element={<Nutri2Page />} />
        </Routes>
        <Toaster/>
    </div>
    </BrowserRouter>
  ) 
}
export default App