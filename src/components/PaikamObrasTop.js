import React from 'react'
import paikam_index from '../images/paikam-index.jpg';
import paikam_diluvio from '../images/paikam-diluvio.jpg';

function PaikamObrasTop() {
    return (            
        <div className="row">
            <div className="col-md-5 pr-0">
                <img src={ paikam_index } alt="gym" className="img-fluid wow bounceInLeft" />
            </div>
            <div className="col-md-7 pl-0">
                <div className="wow bounceInRight" data-wow-delay=".25s">
                    <div className="card-img-overlay">
                        <p>En 2020 la agrupación trabajó en el “Proyecto de formación para nuevos titiriteros” en la
                        ciudad de Durango y en el 2021 estrena su nueva producción: Pai’kam.</p>
                    </div>
                    <img src={ paikam_diluvio } alt="Paikam Diluvio" className="img-fluid" /> 
                </div>
            </div>
        </div>
    )
}

export default PaikamObrasTop
