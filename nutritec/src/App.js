import React, { useEffect} from 'react'; // Importamos ambos hooks desde 'react'
import './App.css';
import Login from './pages/Login';
import { gapi } from 'gapi-script';
import Home from './pages/home';
import ViewEjercicio from './pages/ViewEjercicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewComida from './pages/ViewComida';

const clientID = "562434628830-oth6ci1o114k7bfgstmqaq0ardicrk1l.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    const start = async () => {
      await gapi.client.init({
        clientId: clientID,
        scope: "email",
      });
    };

    gapi.load('client:auth2', start);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/viewEjercicio" element={<ViewEjercicio />} />
          <Route path="/viewComida" element={<ViewComida/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
