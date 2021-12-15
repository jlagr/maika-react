import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';

const Footer = ( { includeContact } ) => {

    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="row">
                    {/* Footer left */}
                    <div className="col-md-3 footer1 d-flex" style={{ marginTop: '20px', marginBottom: '50px'}}>
                        <div className="d-flex flex-wrap align-content-center">
                            <a href="/"><img src = { logo } alt="logo" /></a>
                            <p>Teatro de titeres, objetos y todos los recursos en las artes escenicas</p>
                            &copy; 2021 MaikaTeatro.com Todos los Derechos Reservados.<br></br>
                            Diseño y Programación: &nbsp;
                            <a href="https://github.com/jlagr" target="_blank" rel="noreferrer">Jose Luis Gonzalez</a>.
                            
                        </div>
                    </div>

                    {/* Contact Form */}
                    { includeContact && <ContactForm /> }                        

                    {/* Footer Right */}
                    <div className="col-md-3 footer3">
                        <h5>DIRECCION</h5>
                        <p>Calandrias 101, Fracc. <br></br>Silvestre Revueltas,<br></br> Durango, Dgo</p> 
                        <h5>TELEFONO</h5>
                        <p><a href="tel:3339027092">+52 33 3902 7092</a></p>
                        <h5>EMAIL</h5>
                        <p><a href="mailto:contacto@maikateatro.com">contacto@maikateatro.com</a></p>
                        <div className="social-links">
                            <ul className="nav nav-item">
                                <li>
                                    <a href="https://www.facebook.com/Maika-Teatro-430703303679301" className="btn btn-secondary mr-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src= { facebook } alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/maikateatro?igshid=1vu509hm48z0" className="btn btn-secondary mr-1 ml-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src={ instagram } alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCId2Foo_ovfKUe34ARI5_Lw" className="btn btn-secondary mr-1 ml-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src={ youtube } alt="youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/MaikaTeatro?s=09"  className="btn btn-secondary mr-1 ml-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src={ twitter } alt="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>       
                    </div>

                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    includeContact: PropTypes.bool
}

Footer.defaultProps = {
    includeContact: false
}

export default Footer
