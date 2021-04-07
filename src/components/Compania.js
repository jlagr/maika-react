import React from 'react'

function Compania() {
    return (
        <div id="compania" className="container-fluid fh5co-about-us pl-0 pr-0 parallax-window" data-parallax="scroll" data-image-src="images/about-us-bg.jpg">
            <div className="container">
                <div className="col-sm-6 offset-sm-6">
                <h2 className="wow bounceInLeft" data-wow-delay=".25s">La compañía</h2>
                <hr/>
                <p className="wow bounceInRight" data-wow-delay=".25s"><b>MAIKA TEATRO</b> &nbsp;
                    Surge en el año 2007 como proyecto de experimentación en el campo de los títeres, el
                    teatro de objetos y todo recurso que pueda armonizar en escena, con espectáculos y
                    talleres con los que ha tenido presencia en diversos estados de México, Guatemala, Honduras, Cuba, Perú, Colombia y Argentina.
                    </p>
                <a className="btn btn-sm btn-outline-danger d-inline-block text-center mx-auto wow bounceInDown" style={{backgroundColor:'black'}} href="/pages/compania">Mas detalles</a> </div>
            </div>
        </div>
    )
}

export default Compania
