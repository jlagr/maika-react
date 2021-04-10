import React from 'react'
import { getFormacion } from '../selectors/formacionSelector'

const ProyectosScreen = () => {
    const formacion = getFormacion();

    return (
        <div className="container-fluid fh5co-content-box" style={{backgroundColor:'#464646', marginTop: '-170px'}}>
            <div className="container">
                <div className="row festivals" style={{color: '#fff'}}>
                    <div className="col-md-12">
                        <div className="quote-box2 wow bounceInDown" data-wow-delay=".25s" style={{minWidth: '380px'}}>
                            <h2> Proyectos de Formación </h2>
                            
                        </div>
                        <p>
                            <ul>
                                {
                                    formacion.map( ({year, project}) => <li>{ year } - { project } </li>)
                                }
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectosScreen
