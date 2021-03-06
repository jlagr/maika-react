import React from 'react'
import background from '../images/negro-large-bg.jpg';
import imgInicio from '../images/inicio.jpg';
import imgPrincipeNieve from '../images/principe-nieve.jpg';
import imgPaikamArbol from '../images/paikam-arbol.jpg';
import imgThumbGusano from '../images/thumbnail-gusano.jpg';
import imgThumbGorgonia from '../images/thumbnail-gorgonia.jpg';
import imgThumbPintor from '../images/thumbnail-pintor.jpg';
import pdfTrayectoria from '../trayectoria.pdf';

function CompaniaScreen() {
    return (
        <div className="container-fluid fh5co-network" data-parallax="scroll" data-image-src={ background }
        style={{marginTop: '-100px'}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Maika Teatro</h2>
                        <hr />
                        <p>Surge en el año 2007 como proyecto de experimentación en el campo de los títeres, 
                        el teatro de objetos y todo recurso que pueda armonizar en escena, con espectáculos y talleres con los que ha tenido presencia en diversos estados de México, Guatemala, Honduras, Cuba, Perú, Colombia y Argentina.</p>
                    </div>
                    <div className="col-md-6">
                        <figure className="wow bounceInDown" style={{marginTop: '10px !importat'}}> 
                            <img src = { imgInicio } alt="gym" className="img-fluid" /> 
                        </figure>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="col-sm-6 offset-sm-6">      
                    <p>La compañía ha sido beneficiaria en dos ocasiones del Programa de Estímulos a la Creación y
                        el Desarrollo Artístico (PECDA 2008, 2009), Proyecta Jalisco (2014) y del Fondo Nacional para
                        la Cultura y las Artes (FONCA, creadores escénicos categorías A y B, 2013, 2019).
                    </p>
                    <p>En 2020 la agrupación trabajó en el “Proyecto de formación para nuevos titiriteros” en la
                        ciudad de Durango y recientemente presentó su nueva producción: Pai’kam.
                    </p>
                </div>
            </div>

            <div className="container-fluid fh5co-content-box" style={{backgroundImage: 'none'}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-5 pr-0"><img src={ imgPrincipeNieve } alt="gym" className="img-fluid wow bounceInLeft" /> </div>
                        <div className="col-md-7 pl-0">
                            <div className="wow bounceInRight" data-wow-delay=".25s">
                                <div className="card-img-overlay">
                                    <h4 style={{color: 'white'}}>Becas y estímulos</h4>
                                    <p style={{color: 'white'}}>
                                        FONCA, Creadores Escénicos 2019 • 
                                        PROYECTA 2014 • 
                                        FONCA, Creadores Escénicos 2013 • 
                                        PECDA 2009 • 
                                        PECDA 2008
                                    </p>
                                </div>
                                <img src={ imgPaikamArbol } alt="paikam" className="img-fluid" /> 
                            </div>
                        </div>
                    </div> 
                
                    <div className="row gallery" style={{marginTop: '30px', marginBottom: '30px'}}>
                        <div className="col-md-4">
                            <div className="card">        
                                <img className="card-img-top img-fluid"  src={ imgThumbGusano } alt='gusano'/> 
                            </div> 
                        </div> 
                        <div className="col-md-4">                   
                            <div className="card">        
                                <img className="card-img-top img-fluid"  src={imgThumbGorgonia} alt='gorgonia'/>
                            </div> 
                        </div> 
                        <div className="col-md-4">                   
                            <div className="card">        
                                <img className="card-img-top img-fluid"  src={imgThumbPintor} alt='pintor'/> 
                            </div>
                        </div>ß
                    </div>

                    <div className="row">
                    <div className="col-md-12">
                        <a href={pdfTrayectoria} className="btn btn-secondary mr-1 mb-2" target="_blank" rel="noreferrer">
                            Trayectoria y reconocimientos (pdf)...
                        </a>
                    </div>
                    
                </div>

                </div>
            </div>           
        </div>
    )
}

export default CompaniaScreen
