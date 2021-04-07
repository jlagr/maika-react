import React from 'react'

const Festival = ( {id, city, year, name, img, url} ) => {

    const press = url.length > 1 ? (
        <a href={ url } className="btn btn-secondary mr-1 mb-2" target="_blank" rel="noreferrer">Nota de prensa...</a>
    ) : '';

    return (
        
        <div className="col-md-6 pr-5 pl-5">
            <div className="card text-center wow bounceInLeft" data-wow-delay=".25s"> 
                <img className="card-img-top rounded-circle img-fluid" src={ img } alt={ id } />
                <div className="card-body mb-5">
                    <h4 className="card-title">{ name }</h4>
                    <p className="card-text">
                        { year }<br></br>{ city }
                    </p>
                    { press }
                </div>
            </div>
        </div>
    )
}

export default Festival
