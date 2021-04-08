import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import logo from '../images/logo.png';
import paikam_banner from '../images/paikam_banner.jpg';

const Navbar = () => {
    return (
        <div className="container-fluid pl-0 pr-0 bg-img clearfix parallax-window2" data-parallax="scroll" data-image-src={ paikam_banner }>
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
                    <div className="quote-box pl-5 pr-5 wow bounceInRight">
                        <h2> Paik'am <br></br><span>por Maika Teatro 2021</span> </h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
