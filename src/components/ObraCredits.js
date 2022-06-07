import React from 'react'

const ObraCredits = ({credits, obra}) => {
    return (
        <>
            <h2 className="wow" id="credits">Creditos</h2>
            <hr />
            <div className="row">
                {
                    credits.map( ({id, rol, name, elenco}) => (
                        <div className="col-md-4" key={rol}>
                            {
                                obra === "Paik'am" ? (
                                    rol === "Elenco" ?
                                    (
                                        <p className="paikam_link"> 
                                            • {rol}:
                                            {
                                                elenco.map(({id, name}) => <a key={id} className="nav-link" href={`/pages/bio/${ id }`}>{name}</a>)
                                            }
                                        </p>
                                    )
                                    : 
                                    id > 0 ?
                                        (<p className="paikam_link"> 
                                            • {rol}: <a className="nav-link" href={`/pages/bio/${ id }`}>{name}</a>
                                        </p>)
                                    :
                                        <p className="paikam_link"> 
                                            • {rol}:<br /> {name}
                                        </p>
                                )
                                : <p className="wow">• {rol}: <br />{name}</p>
                            }
                            
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ObraCredits
