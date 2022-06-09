import React from 'react'

const PrensaRow = ( { medio, titulo, date, link } ) => {
    return (
        <div className='col-md-4'>
            <div className='paikam-press-card' >
                <div className='card-body'>
                    <h5 className='paikam-press-card-title'>{ titulo }</h5>
                    <h6 className='paikam-press-card-subtitle mb-2 text-muted'>{ medio } • { date }</h6>
                    <a href={ link } className='paikam-press-card-link' target='_blank' rel="noreferrer">leer nota</a>
                </div>
            </div>
        </div>
    )
}

export default PrensaRow