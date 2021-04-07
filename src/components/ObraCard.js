import React from 'react'
import { useLocation } from 'react-router-dom';

const ObraCard = ( { id, name, intro, mainImg, imgPos } ) => {
    const { pathname } = useLocation();

    const pathRoot = pathname.endsWith('obras') ? '../../' : '';
    
    return (
        <div className="col-md-4">
            <div className="card">
                { imgPos==='up' && (<img className="card-img-top img-fluid wow bounceInLeft" data-wow-delay=".25s" src={ pathRoot + mainImg } alt={id} />) }
                <div className="card-body mb-4 wow bounceInRight" data-wow-delay=".25s">
                    <h4 className="card-title"> { name } </h4>
                    <p className="card-text"> { intro } </p>
                    <a className="btn btn-sm btn-outline-danger d-inline-block text-center mx-auto" 
                    href={`/pages/obras/${ id }`}
                    style= { {marginRight: "0px"} } >Mas detalles</a>
                </div>
                { imgPos==='down' && (<img className="card-img-top img-fluid wow bounceInLeft" data-wow-delay=".25s" src={ pathRoot + mainImg } alt={id} />) } 
            </div>
        </div>
    )
}

export default ObraCard
