import React from 'react'
import { Link } from 'react-scroll'

const ObraButtom = ({gallery}) => {
    const firstId = gallery[0].id;
    const buttons = firstId.startsWith('workshop') ?
    '' : 
    <div className="row" style={{marginLeft: '350px'}}>
                <div className="col">
                    <Link activeClass="active" className="btn btn-sm btn-outline-danger d-inline-block text-center mx-auto" 
                        to="start" spy={true} smooth={true} duration={500} 
                        style={{width:'150px', color: 'white', borderColor: "white"}}>Inicio 
                    </Link>
                </div>
                <div className="col">
                    <a className="btn btn-sm btn-outline-danger d-inline-block text-center mx-auto" 
                    style={{width:'150px', color: 'white', borderColor: "white"}} 
                    href="/pages/obras">Obras</a>
                </div>
            </div>

    return (
        <>
             <div className="row gallery" style={{marginBottom: '30px'}}>
                {
                    gallery.map( ({id, url}) => (
                        <div className="col-md-4" key={id}>
                            <div className="card" style={{backgroundColor:'transparent'}}>        
                                <img className="card-img-top img-fluid wow" src={ process.env.PUBLIC_URL + url } alt={id} /> 
                            </div>
                        </div>
                    ))
                }
                
            </div>

            { buttons }                
        </>
    )
}

export default ObraButtom
