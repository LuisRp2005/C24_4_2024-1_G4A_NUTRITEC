import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import '../pages/estiloIA.css';

function NutriIA() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/chat/send', { message });
            console.log(response.data);
            
            // Verificar y extraer el mensaje de respuesta correctamente
            const botMessage = response.data.choices[0].message.content.trim() || "No response";

            setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: botMessage }]);
            setMessage("");
        } catch (error) {
            console.error("Error sending message", error);
        }
    };

    return (
        <div className='nutri-ia-container'>
            <NavBar />
            <div className='chat-container'>
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <span className='brand'>NutriIA</span>
                        <img src='/img_nutricion.png' alt='Logo' className='logo'/>
                    </div>
                    <button className='new-chat-btn'><img src='/suma.png' className='addBtn'/>New Chat</button>
                    <div className='query-list'>
                        <button className='query'><img className='query-icon' alt='Query'/>What is programming</button>
                        <button className='query'><img className='query-icon' alt='Query'/>What is programming</button>
                    </div>
                    <div className='sidebar-footer'>
                        <div className='sidebar-item'>
                            <img src='/home.png' alt='Home' className='sidebar-icon'/>
                            <span>Home</span>
                        </div>
                        <div className='sidebar-item'>
                            <img src='/guardar.png' alt='Saved' className='sidebar-icon'/>
                            <span>Saved</span>
                        </div>
                        <div className='sidebar-item'>
                            <img src='/rocket.png' alt='Upgrade' className='sidebar-icon'/>
                            <span>Upgrade to Pro</span>
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <div className='chats'>
                        {chat.map((msg, index) => (
                            <div key={index} className={`chat ${msg.sender}`}>
                                <p className='txt'>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='chat-footer'>
                        <input type='text' placeholder='Send a Message' className='chat-input' value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button className='send-btn' onClick={sendMessage}><img src='/enviar.png' alt='Send' className='send-icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NutriIA;
