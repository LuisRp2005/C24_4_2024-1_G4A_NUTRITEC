// NutriIA.js
import React from 'react';
import NavBar from '../components/Navbar';
import '../pages/estiloIA.css';

function NutriIA() {
    return (
        <div className='nutri-ia-container'>
            <NavBar />
            <div className='chat-container'>
                <div className='sidebar'>
                    <div className='sidebar-header col' style={{ textAlign: 'center' }}>
                        <span className='brand mt-2 mb-4'>NutriIA</span>
                    </div>

                    <button className='new-chat-btn'><img src='/suma.png' className='addBtn' alt='New Chat' /> New Chat</button>
                    <div className='query-list mb-4'>
                        <button className='query'><img className='query-icon' alt='Query' src='/query_icon.png' />What is programming</button>
                        <button className='query'><img className='query-icon' alt='Query' src='/query_icon.png' />How to lose weight</button>
                    </div>
                    <div className='sidebar-footer mt-4'>
                        <div className='sidebar-item'><img src='/home.png' alt='Home' className='sidebar-icon' /><span>Home</span></div>
                        <div className='sidebar-item'><img src='/guardar.png' alt='Saved' className='sidebar-icon' /><span>Saved</span></div>
                        <div className='sidebar-item'><img src='/rocket.png' alt='Upgrade' className='sidebar-icon' /><span>Upgrade to Pro</span></div>
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
