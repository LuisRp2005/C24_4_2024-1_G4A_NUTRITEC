import React from 'react';
import './App.css';
import Login from './components/Login';
import  { useEffect } from 'react';
import { gapi } from 'gapi-script';

 const clienteID = "562434628830-oth6ci1o114k7bfgstmqaq0ardicrk1l.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clienteID,
        scope: "email",
      });
    }
  
    gapi.load('client:auth2', start);
  }, []);  


  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
