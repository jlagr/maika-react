import React from 'react'

const PrensaPaikam = ({credits}) => {
    return (
        <>
            <h2 className="wow" id="prensaPaikam">Notas de Prensa</h2>
            <hr />
            <div className="row">
                {
                    /* credits.map( ({rol, name}) => (
                        <div className="col-md-4" key={rol}>
                            <p className="wow">• {rol}: {name}</p>
                        </div>
                    )) */
                }
            </div>
        </>
    )
}

export default PrensaPaikam
