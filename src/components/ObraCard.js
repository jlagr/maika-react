import React from 'react'

const ObraCard = ( { id, name, intro, mainImg, imgPos } ) => {
    return (
        <div className="col-md-4">
            <div className="card">
                { imgPos==='up' && (<img className="card-img-top img-fluid" src={ process.env.PUBLIC_URL + mainImg } alt={id} />) }
                <div className="card-body mb-4">
                    <h4 className="card-title"> { name } </h4>
                    <p className="card-text"> { intro } </p>
                    <a className="btn btn-sm btn-outline-danger d-inline-block text-center mx-auto" 
                    href={`/pages/obras/${ id }`}
                    style= { {marginRight: "0px"} } >Mas detalles</a>
                </div>
                { imgPos==='down' && (<img className="card-img-top img-fluid" data-wow-delay=".25s" src={ process.env.PUBLIC_URL + mainImg } alt={id} />) } 
            </div>s
        </div>
    )
}

export default ObraCard
