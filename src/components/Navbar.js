import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import logo from '../images/logo.png';
import paikam_video from '../images/paikam_video.mp4';

const Navbar = () => {
    return (
        <div className="container-fluid pl-0 pr-0 clearfix parallax-window2">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container"> 
                    {/* Brand   */}
                    <a className="navbar-brand mr-auto" href="/"><img src={ logo } alt="MaikaTeatro" /></a> 
                    
                    {/* Toggler/collapsibe Button  */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> </button>
                    
                    {/* Navbar links */}  
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <Link activeClass="active" className="nav-link" to="compania" spy={true} smooth={true} duration={500}>La Compañia </Link>
                            <Link activeClass="active" className="nav-link" to="obras" spy={true} smooth={true} duration={500}>Obras </Link>
                            <NavLink activeClassName="active" className="nav-link" exact to="pages/proyectos">Proyectos de Formación </NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="pages/festivales">Festivales </NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="pages/talleres">Talleres </NavLink>
                            <Link activeClass="active" className="nav-link" to="contact" spy={true} smooth={true} duration={500} >Contacto </Link>
                        </ul>
                    </div>                    
                </div>
            </nav>
            
            <div className="container">
                <div className="fh5co-banner-text-box">
                    <div className="quote-box pl-5 pr-5">
                        <h2> Paik'am <br></br><span>por Maika Teatro 2021</span> </h2>
                    </div>
                </div>
                <div className="video-overlay"></div>
                <video style={{width:"100%"}} autoPlay loop muted playsInline autobuffer="true">
                    <source src={ paikam_video } type="video/mp4"/>
                </video>
            </div>

        </div>
    )
}

export default Navbar
