import React from 'react'

const ObraCredits = ({credits}) => {
    return (
        <>
            <h2 className="wow">Creditos</h2>
            <hr />
            <div className="row">
                {
                    credits.map( ({rol, name}) => (
                        <div className="col-md-4" key={rol}>
                            <p className="wow">• {rol}: {name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ObraCredits
