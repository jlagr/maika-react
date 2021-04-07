import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'

function Footer( { includeContact } ) {

    const rootPath = includeContact ? '' : '../../';

    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="row">
                    {/* Footer left */}
                    <div className="col-md-3 footer1 d-flex" style={{ marginTop: '20px', marginBottom: '50px'}}>
                        <div className="d-flex flex-wrap align-content-center">
                            <a href="/"><img src = {rootPath + 'images/logo.png'} alt="logo" /></a>
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
                        <p>+52 33 3902 7092</p>
                        <h5>EMAIL</h5>
                        <p>contacto@maikateatro.com</p>
                        <div className="social-links">
                            <ul className="nav nav-item">
                                <li>
                                    <a href="https://www.facebook.com/maika.teatro" className="btn btn-secondary mr-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src= {rootPath + 'images/facebook.png'} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/maikateatro?igshid=1vu509hm48z0" className="btn btn-secondary mr-1 ml-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src={rootPath + 'images/instagram.png'} alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCId2Foo_ovfKUe34ARI5_Lw" className="btn btn-secondary mr-1 ml-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src={rootPath + 'images/youtube.png'} alt="youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/MaikaTeatro?s=09"  className="btn btn-secondary mr-1 ml-1 mb-2" target="_blank" rel="noreferrer">
                                        <img src={rootPath + 'images/twitter.png'} alt="twitter" />
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
