import React from 'react';
import NavBar from '../components/Navbar';
import '../pages/estiloIA.css';

function NutriIA() {
    return (
        <div>
            <NavBar />
            <div className='App'>
                <div className='sideBar'>
                    <div className='upperSide'>
                        <div className='upperSideTop'><img src='/img_nutricion.png' alt='Logo' className='logo'/><span className='brand'> NutriIA</span></div>
                        <button className='midBtn'><img src='/suma.png' className='addBtn'/>New Chat</button>
                        <div className='upperSideBottom'>
                            <button className='query'><img className='' alt='Query'/>What is programing</button>
                            <button className='query'><img className='' alt='Query'/>What is programing</button>

                        </div>
                    </div>
                    <div className='loweSide'>
                        <div className='listItems'><img src='/home.png' alt='Home' className='listItemsImg'/>Home</div>
                        <div className='listItems'><img src='/guardar.png' alt='Saved' className='listItemsImg'/>Saved</div>
                        <div className='listItems'><img src='/rocket.png' alt='Upgrade' className='listItemsImg'/>Upgrade to Pro</div>
                    </div>
                </div>
                <div className='main'>
                    <div className='chats'>
                        <div className='chat'>
                            <img src='' alt='' className='chatImg'></img><p className='txt'>asdsahsdsaklodhsalkdhklsadhklsahlkdsahlkdhlahdklsahdlksahlkdsahlksadlkhads</p>
                        </div>
                        <div className='chat bot'>
                            <img src='' alt='' className='chatImg'></img><p className='txt'>asdsadasdsasdhnlkashdlkashkjdhksadhkjkhhksadhdkjsahdksajhdsakjkjhsadsahkldsahlkdhskalhdlksahlkdsahlksadhkldhlksahsalklhdsalkasdjkasdhjksahks</p>
                        </div>
                    </div>
                    <div className='chatFooter'>
                        <div className='inp'>
                            <input type='text' placeholder='Send a Message'/><button className='send'><img src='/enviar.png' alt='Send'></img></button>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NutriIA;