import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeartbeat, 
    faDumbbell, 
    faUtensils, 
    faHandshake, 
    faMobileAlt, 
    faMedal, 
    faMapMarkerAlt, 
    faPhoneAlt, 
    faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebookF, 
    faInstagram, 
    faTwitter, 
    faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import NavBar from '../components/Navbar';
import '../pages/CssHome.css'; // Asegúrate de que la importación del CSS esté correcta

const Home = () => {
    // Estado para modales y estilos
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [imageAnimation, setImageAnimation] = useState(false);

    // Estado para estilos dinámicos
    const [styles, setStyles] = useState({
        backgroundStyle: {
            backgroundColor: '#00913f', // Verde más amigable
        },
        cardStyle: {
            backgroundColor: '#00913f', // Tono gris para los cuadros
        },
    });

    // Hook para detectar si el elemento está en la vista
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    // Efecto para la animación cuando el elemento está en vista
    useEffect(() => {
        if (inView) {
            setImageAnimation(true);
            setStyles({
                ...styles,
                backgroundStyle: {
                    backgroundColor: '#00913f',
                },
                cardStyle: {
                    backgroundColor: '#00913f',
                },
            });
        }
    }, [inView]);

    // Funciones para controlar los modales
    const toggleModal1 = () => {
        setShowModal1(!showModal1);
    };

    const toggleModal2 = () => {
        setShowModal2(!showModal2);
    };

    return (
        <div>
            <NavBar />

            {/* Banner Section */}
            <div className="container-fluid pl-0 pr-0 bg-img" data-parallax="scroll" style={{ backgroundImage: "url('img_referencial2.jpg')" }}>
                <div className="container">
                    <div className="fh5co-banner-text-box">
                        <div className="quote-box pl-5 pr-5 wow bounceInRight">
                            <h2>
                                NUTRITEC <FontAwesomeIcon icon={faHeartbeat} />
                                <br /><span>Descubre el camino hacia una salud mejorada</span>
                            </h2>
                        </div>
                        <a href="/viewEjercicio" className="btn text-uppercase btn-success btn-lg mr-3 mb-3 wow mx-2" style={{ color: '#000' }}>
                            Ejercicios <FontAwesomeIcon icon={faDumbbell} className="mr-2" style={{ color: '#ffff' }} />
                        </a>
                        <a href="/viewComida" className="btn text-uppercase btn-success btn-lg mb-3 wow" style={{ color: '#000' }}>
                            Comidas <FontAwesomeIcon icon={faUtensils} className="mr-2" style={{ color: '#ffff' }} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Network Section */}
            <div className="container-fluid fh5co-network mt-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="wow bounceInRight">COMIDAS SALUDABLES</h2>
                            <hr />
                            <h5 className="wow bounceInLeft">VERANO DE NETWORK 2017</h5>
                            <p className="wow bounceInDown">Consejos para una alimentación balanceada y saludable • Recetas nutritivas y deliciosas • Comparación entre alimentos crudos y cocidos • Tips para mantener una dieta equilibrada y deliciosa • ¡Y mucho más!</p>
                            <a href="/viewComida" className="btn text-uppercase btn-success btn-lg mb-3 wow" style={{ color: '#000' }}>
                                Comidas <FontAwesomeIcon icon={faUtensils} className="mr-2" style={{ color: '#ffff' }} />
                            </a>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <figure className="wow bounceInDown"> <img src="comida1.jpg" alt="comida" className="img-fluid" /> </figure>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Acerca de Nosotros */}
            <div id="about-us" className="container-fluid fh5co-about-us" data-parallax="scroll" data-image-src="images/about-us-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <figure className="wow bounceInDown"> <img src="ejercicio1.jpg" alt="ejercicio" className="img-fluid" /> </figure>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="wow bounceInLeft" data-wow-delay=".25s">EJERCICIOS PERSONALIZADOS</h2>
                            <hr />
                            <p className="wow bounceInRight" data-wow-delay=".25s">Descubre técnicas efectivas para mejorar tu rendimiento físico • Entrenamientos adaptados a tus necesidades • Fortalecimiento de abdominales, core y pelvis • Consejos para alcanzar tus metas a corto plazo • ¡Todo lo que necesitas para un entrenamiento efectivo y personalizado!</p>
                            <a href="/viewEjercicio" className="btn text-uppercase btn-success btn-lg mr-3 mb-3 wow mx-2" style={{ color: '#000' }}>
                                Ejercicios <FontAwesomeIcon icon={faDumbbell} className="mr-2" style={{ color: '#ffff' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Sección de Información */}
            <section className="why_section layout_padding mt-5">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>NOSOTROS</h2>
                    </div>
                    <div className="content-container">
                        <p>
                            Somos una empresa dedicada a mejorar la salud a través de planes personalizados de nutrición y ejercicios. Nuestro objetivo es ayudarte a alcanzar un estilo de vida saludable y equilibrado.
                        </p>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="icon-box">
                                    <FontAwesomeIcon icon={faHandshake} />
                                </div>
                                <div className="detail-box">
                                    <h3>99%</h3>
                                    <h6>CLIENTES SATISFECHOS</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="icon-box">
                                    <FontAwesomeIcon icon={faDumbbell} />
                                </div>
                                <div className="detail-box">
                                    <h3>+100</h3>
                                    <h6>PLANES DE EJERCICIO</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="icon-box">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </div>
                                <div className="detail-box">
                                    <h3>+100</h3>
                                    <h6>CLIENTES EN MOVIL</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="icon-box">
                                    <FontAwesomeIcon icon={faMedal} />
                                </div>
                                <div className="detail-box">
                                    <h3>+10</h3>
                                    <h6>AÑOS EN EL MERCADO</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Box Section */}
            <div ref={ref} className="fh5co-content-box mt-5">
                <div className="container">
                    <div className="row trainers">
                        <div className="col-md-6">
                            <div className={`card text-center wow ${imageAnimation ? 'animate fadeIn' : ''}`} data-wow-delay=".25s">
                                <img className="card-img-top rounded-circle img-fluid" src="cambio.jpg" alt="Historia 1" />
                                <div className="card-body mb-5">
                                    <h4 className="card-title" style={{ color: '#ffffff', fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>Cambios Físicos</h4>
                                    <p className="card-text" style={{ color: '#ffffff', fontFamily: 'Lato, sans-serif' }}>Descubre cómo la adopción de hábitos saludables transformó la vida de nuestros clientes.</p>
                                    <button onClick={toggleModal1} className="btn btn-success btn-lg mt-3">Leer más</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`card text-center wow ${imageAnimation ? 'animate fadeIn' : ''}`} data-wow-delay=".25s">
                                <img className="card-img-top rounded-circle img-fluid" src="cambio1.jpg" alt="Historia 2" />
                                <div className="card-body mb-5">
                                    <h4 className="card-title" style={{ color: '#ffffff', fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>Superación Personal</h4>
                                    <p className="card-text" style={{ color: '#ffffff', fontFamily: 'Lato, sans-serif' }}>Explora cómo nuestros programas ayudaron a personas a superar desafíos y alcanzar sus metas.</p>
                                    <button onClick={toggleModal2} className="btn btn-success btn-lg mt-3">Leer más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modales de historias */}
            <div className={`modal fade ${showModal1 ? 'show' : ''}`} style={{ display: showModal1 ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Transformación Personal</h5>
                            <button type="button" className="close" onClick={toggleModal1}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Detalles y texto adicional sobre la transformación personal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleModal1}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal fade ${showModal2 ? 'show' : ''}`} style={{ display: showModal2 ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Superación Personal</h5>
                            <button type="button" className="close" onClick={toggleModal2}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Detalles y texto adicional sobre la superación personal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleModal2}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-5">
                            <h1 className=" text-success border-bottom pb-3 border-light logo">NutriTec</h1>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-fw" />
                                     123 Av. Cascanueces-Santa Anita
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhoneAlt} className="fa-fw" />
                                    <a className="text-decoration-none" href="tel:010-020-0340"> 981-499-187</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
                                    <a className="text-decoration-none" href="mailto:info@company.com"> nutritec@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Servicios</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Ejericicios</a></li>
                                <li><a className="text-decoration-none" href="#">Comidas</a></li>
                                <li><a className="text-decoration-none" href="#">Desg. Ejercicios</a></li>
                                <li><a className="text-decoration-none" href="#">Desg. Comidas</a></li>
                                <li><a className="text-decoration-none" href="#">Nutri IA</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Informacion</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Home</a></li>
                                <li><a className="text-decoration-none" href="#">Nosotros</a></li>
                                <li><a className="text-decoration-none" href="#">¿Quienes Somos?</a></li>
                                <li><a className="text-decoration-none" href="#">FAQs</a></li>
                                <li><a className="text-decoration-none" href="#">Contactanos</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><FontAwesomeIcon icon={faFacebookF} className="fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} className="fa-lg fa-fw" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                            
                        </div>
                    </div>
                </div>

                <div className="w-100 bg-success py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright &copy; 2024 Nutritec
                                    | Designed by Tecsup
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
