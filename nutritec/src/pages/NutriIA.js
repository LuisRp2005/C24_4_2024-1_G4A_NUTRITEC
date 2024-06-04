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
            const botMessage = response.data.choices[0].text.trim();
            setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: botMessage }]);
            setMessage("");
        } catch (error) {
            console.error("Error sending message", error);
        }
    };

    return (
        <div className='nutri-ia-container'>
            <NavBar />
            <div className='App'>
                <div className='sideBar'>
                    <div className='upperSide'>
                        <div className='upperSideTop'><img src='/img_nutricion.png' alt='Logo' className='logo'/><span className='brand'> NutriIA</span></div>
                        <button className='midBtn'><img src='/suma.png' className='addBtn'/>New Chat</button>
                        <div className='upperSideBottom'>
                            <button className='query'><img className='' alt='Query'/>What is programming</button>
                            <button className='query'><img className='' alt='Query'/>What is programming</button>
                        </div>
                    </div>
                    <div className='lowerSide'>
                        <div className='listItems'><img src='/home.png' alt='Home' className='listItemsImg'/>Home</div>
                        <div className='listItems'><img src='/guardar.png' alt='Saved' className='listItemsImg'/>Saved</div>
                        <div className='listItems'><img src='/rocket.png' alt='Upgrade' className='listItemsImg'/>Upgrade to Pro</div>
                    </div>
                </div>
                <div className='main'>
                    <div className='chats'>
                        <div className='chat user'>
                            <p className='txt'>Hello!</p>
                        </div>
                        <div className='chat bot'>
                            <p className='txt'>Hi there! How can I assist you today?</p>
                        </div>
                    </div>
                    <div className='chat-footer'>
                        <input type='text' placeholder='Send a Message' className='chat-input' />
                        <button className='send-btn'><img src='/enviar.png' alt='Send' className='send-icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NutriIA;
