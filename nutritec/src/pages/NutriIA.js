import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import '../pages/estiloIA.css'; // Importa los estilos personalizados

function NutriIA() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false); // Estado para indicar carga de mensajes

    // Ref para el input de mensaje y para scroll automático
    const messageInputRef = useRef(null);
    const chatsEndRef = useRef(null);

    // Función para enviar mensajes al servidor y recibir respuesta del bot
    const sendMessage = async () => {
        if (!message.trim()) return; // Evitar enviar mensajes vacíos

        setLoading(true); // Activar indicador de carga

        try {
            const response = await axios.post('http://localhost:8080/api/chat/send', { message });
            const botMessage = response.data.choices[0]?.message.content.trim() || 'No response';

            // Actualizar el chat con los mensajes del usuario y del bot
            setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: botMessage }]);
            setMessage(''); // Limpiar el campo de mensaje
        } catch (error) {
            console.error('Error sending message', error);
        } finally {
            setLoading(false); // Desactivar indicador de carga
        }
    };

    // Función para manejar el envío cuando se presiona Enter
    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita que se envíe el formulario (si estuviera en un formulario)
            sendMessage();
        }
    }, [sendMessage]);

    // Función para recargar la página al hacer clic en "New Chat"
    const reloadPage = useCallback(() => {
        window.location.reload();
    }, []);

    // Efecto para desplazar automáticamente hacia abajo al agregar un nuevo mensaje
    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    const scrollToBottom = () => {
        if (chatsEndRef.current) {
            chatsEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="nutri-ia-container">
            <NavBar />
            <div className="chat-container">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <span className="brand p-4">NutriIA </span>
                        <img src="/img_nutricion.png" alt="Logo" className="logo" />
                    </div>
                    <button className="new-chat-btn" onClick={reloadPage}>
                        <img src="/suma.png" className="addBtn" alt="New Chat" /> New Chat
                    </button>
                </div>
                <div className="main">
                    {/* Contenedor principal de los chats */}
                    <div className="chats">
                        {chat.map((msg, index) => (
                            <div key={index} className={`chat ${msg.sender}`}>
                                <div className="message">
                                    <p className="txt">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={chatsEndRef}></div>
                    </div>
                    {/* Footer del chat para enviar mensajes */}
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Send a Message"
                            className="chat-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown} // Manejar envío con Enter
                            disabled={loading} // Deshabilitar input durante la carga
                            aria-label="Type your message here" // Accesibilidad
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
