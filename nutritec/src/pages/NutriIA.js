import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import '../pages/estiloIA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

function NutriIA({ preguntaInicial, historialConversacion }) {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const messageInputRef = useRef(null);
    const chatsEndRef = useRef(null);

    const sendMessage = async () => {
        if (!message.trim()) return;

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/chat/send', { message });
            const botMessage = response.data.choices[0]?.message.content.trim() || 'No response';

            setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: botMessage }]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message', error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    }, [sendMessage]);

    const reloadPage = useCallback(() => {
        window.location.reload();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    const scrollToBottom = () => {
        if (chatsEndRef.current) {
            chatsEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (preguntaInicial) {
            iniciarConversacion(preguntaInicial);
        }
    }, [preguntaInicial]);

    const iniciarConversacion = async (pregunta) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/chat/send', { message: pregunta });
            const botMessage = response.data.choices[0]?.message.content.trim() || 'No response';
            setChat([{ sender: 'bot', text: botMessage }]);
        } catch (error) {
            console.error('Error sending initial message', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <div className="nutri-ia-container">
            <NavBar/>
            <div className="chat-container">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <span className="brand p-4">NutriIA <FontAwesomeIcon icon={faBrain} className='ml-1' /></span>
                        
                        
                    </div>
                    <button className="new-chat-btn" onClick={reloadPage}>
                        <img src="/suma.png" className="addBtn" alt="New Chat" /> New Chat
                    </button>
                </div>
                <div className="main">
                    <div className="chats">
                        {historialConversacion && historialConversacion.map((msg, index) => (
                            <div key={index} className={`chat ${msg.sender}`}>
                                <div className="message">
                                    <p className="txt">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {chat && chat.map((msg, index) => (
                            <div key={index} className={`chat ${msg.sender}`}>
                                <div className="message">
                                    <p className="txt">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={chatsEndRef}></div>
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Send a Message"
                            className="chat-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                            aria-label="Type your message here"
                        />
                        <button className="send-btn" onClick={sendMessage} disabled={loading}>
                            {loading ? 'Respondiendo...' : 'Enviar'}
                            <img src="/enviar.png" alt="Send" className="send-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NutriIA;
