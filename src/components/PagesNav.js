import React from 'react'
import { NavLink } from 'react-router-dom';

const PagesNav = () => {
    return (
        <div className="container-fluid pl-0 pr-0 bg-img clearfix parallax-window2">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container"> 
                    {/* Brand   */}
                    <a className="navbar-brand mr-auto" href="/"><img src="../../images/logo.png" alt="MaikaTeatro" /></a> 
                    
                    {/* Toggler/collapsibe Button  */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> </button>
                    
                    {/* Navbar links */}  
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <NavLink activeClassName="active" className="nav-link" to="/pages/compania" >La Compañia </NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/pages/obras" >Obras </NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/pages/proyectos">Proyectos de Formación </NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/pages/festivales">Festivales </NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/pages/talleres">Talleres </NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/">Contacto </NavLink>
                        </ul>
                    </div>                    
                </div>
            </nav>

        </div>
    )
}

export default PagesNav
