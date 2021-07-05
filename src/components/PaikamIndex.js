import React from 'react'

function PaikamIndex() {
    return (
        <div className="container-fluid fh5co-network maika-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{color: 'black'}}>“Que todo el mundo conozca nuestra historia, antes que el polvo entierre nuestro origen”</h4>
                        <h2>Paik'am</h2>
                        <hr />
                        <h5 style={{color: 'black'}}>Creadores Escénicos, FONCA 2019</h5>
                        <p style={{color: 'black'}}>Inspirado en el origen mitológico de Durango desde la cosmogonía Tepehuana.<br></br>
                        Un espectaculo que combina multiples disiplinas escenicas • Títeres • Danza • Sombras • Musica • Para jóvenes y adultos</p>
                    </div>
                    <div className="col-md-6">
                        <figure className="wow bounceInRight"> 
                            <iframe 
                                className="img-fluid" 
                                style={{ height: '315px' }}
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/OfjEo-lIOdk" 
                                title="Paikam" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaikamIndex
