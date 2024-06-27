import React, { useEffect} from 'react';
import '../pages/CssHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse,faDumbbell, faUtensils } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/Navbar';


const Home = () => {


    return (
        <div>
            <NavBar />
            {/* Banner Section */}
            <div className="container-fluid pl-0 pr-0 bg-img" data-parallax="scroll" style={{ backgroundImage: "url('img_referencial2.jpg')" }}>
                <div className="container">
                <div className="fh5co-banner-text-box">
                    <div className="quote-box pl-5 pr-5 wow bounceInRight">
                    <h2>
                         NUTRITEC <FontAwesomeIcon icon={faHeartPulse} /> 
                        <br /><span>Descubre el camino hacia una salud mejorada</span>
                    </h2>
                    </div>
                    <a href="/viewEjercicio" style={{ color: '#000' }}  className="btn text-uppercase btn-success btn-lg mr-3 mb-3 wow mx-2">
                    Ejercicios <FontAwesomeIcon icon={faDumbbell} className="mr-2"  style={{ color: '#ffff' }}/>
                    </a>
                    <a href="/viewComida"  style={{ color: '#000' }} className="btn text-uppercase btn-success btn-lg mb-3 wow">
                     Comidas <FontAwesomeIcon icon={faUtensils} className="mr-2"   style={{ color: '#ffff' }}/>
                    </a>
                </div>
                </div>
            </div>



            {/* Network Section */}
            <div className="container-fluid fh5co-network">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="wow bounceInUp">FOR NETWORK</h4>
                            <h2 className="wow bounceInRight">MEMBERS</h2>
                            <hr />
                            <h5 className="wow bounceInLeft">NETWORK SUMMER 2017</h5>
                            <p className="wow bounceInDown">The lowdown on Blood Flow Restriction training • FREE CEC/CPD • ​Let's compare ​Raw Vs Cooked • Building Ab, Core &amp; Pelvic strength • Get​ clients short-term wins from long-term goals • So you want to operate multiple clubs? + LOADS MORE</p>
                        </div>
                        <div className="col-md-6">
                            <figure className="wow bounceInDown"> <img src="images/about-img.jpg" alt="gym" className="img-fluid" /> </figure>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div id="about-us" className="container-fluid fh5co-about-us pl-0 pr-0 parallax-window" data-parallax="scroll" data-image-src="images/about-us-bg.jpg">
                <div className="container">
                    <div className="col-sm-6 offset-sm-6">
                        <h2 className="wow bounceInLeft" data-wow-delay=".25s">ABOUT US</h2>
                        <hr />
                        <p className="wow bounceInRight" data-wow-delay=".25s">Trainers, athletes and serious clients alike are looking for the toughest, most brutally productive training techniques to spice up their workouts and provide a truly unique challenge for their body and mind. Think: one-arm push-ups, pistols, pull-ups, handstands, hanging levers and the like! If you want toeither for </p>
                        <a href="#" className="btn btn-lg btn-outline-danger d-inline-block text-center mx-auto wow bounceInDown">Learn More</a>
                    </div>
                </div>
            </div>

            {/* Content Box Section */}
            <div className="container-fluid fh5co-content-box">
                <div className="container">
                    
                    <div className="row trainers pl-0 pr-0">
                        <div className="col-12 bg-50">
                            <div className="quote-box2 wow bounceInDown" data-wow-delay=".25s">
                                <h2> TRAINERS </h2>
                            </div>
                        </div>
                        <div className="col-md-6 pr-5 pl-5">
                            <div className="card text-center wow bounceInLeft" data-wow-delay=".25s"> <img className="card-img-top rounded-circle img-fluid" src="images/trainers1.jpg" alt="Card image" />
                                <div className="card-body mb-5">
                                    <h4 className="card-title">JENIFERR</h4>
                                    <p className="card-text">Trainers, athletes and serious clients alike are looking for the toughest, most brutally productive training techniques to spice up their workouts and provide a truly unique challenge</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pl-5 pr-5">
                            <div className="card text-center wow bounceInRight" data-wow-delay=".25s"> <img className="card-img-top rounded-circle img-fluid" src="images/trainers2.jpg" alt="Card image" />
                                <div className="card-body mb-5">
                                    <h4 className="card-title">JHON</h4>
                                    <p className="card-text">Trainers, athletes and serious clients alike are looking for the toughest, most brutally productive training techniques to spice up their workouts and provide a truly unique challenge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gallery">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body mb-4 wow bounceInLeft" data-wow-delay=".25s">
                                    <h4 className="card-title">FILEX</h4>
                                    <p className="card-text">I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and the US at such an amazing event. </p>
                                </div>
                                <img className="card-img-top img-fluid wow bounceInRight" data-wow-delay=".25s" src="carrusel2.jpg" alt="Card image" /> 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card"> <img className="card-img-top img-fluid wow bounceInUp" data-wow-delay=".25s" src="images/g2.jpg" alt="Card image" />
                                <div className="card-body mt-4 wow bounceInDown" data-wow-delay=".25s">
                                    <h4 className="card-title">IGNITING</h4>
                                    <p className="card-text">I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and the US at such an amazing event. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body mb-4 wow bounceInRight" data-wow-delay=".25s">
                                    <h4 className="card-title">PASSION</h4>
                                    <p className="card-text">I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and the US at such an amazing event. </p>
                                </div>
                                <img className="card-img-top img-fluid wow bounceInLeft" data-wow-delay=".25s" src="images/g3.jpg" alt="Card image" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer1 d-flex wow bounceInLeft" data-wow-delay=".25s">
                            <div className="d-flex flex-wrap align-content-center"> <a href="#"><img src="images/logo.png" alt="logo" /></a>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                dolor. Ae</p>
                                <p>&copy; 2018 Foxpro. All rights reserved.<br /> Design by <a href="https://freehtml5.co" target="_blank" rel="noopener noreferrer">FreeHTML5</a>.</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="social-links">
                                <ul className="nav nav-item">
                                    <li><a href="https://www.facebook.com/fh5co" className="btn btn-secondary mr-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
                                    <li><a href="#"  className="btn btn-secondary mr-1 ml-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
                                    <li><a href="#"  className="btn btn-secondary mr-1 ml-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
                                    <li><a href="#"  className="btn btn-secondary ml-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Home;
