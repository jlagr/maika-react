import React from 'react'
import ObrasGrid from './ObrasGrid'
import PaikamObrasTop from './PaikamObrasTop'

const Obras = () => {
    return (
        <div className="container-fluid fh5co-content-box" style={{backgroundColor:'#464646'}}>
            <div className="container">
                <PaikamObrasTop />
                
                <ObrasGrid />
            </div>
        </div>
    )
}

export default Obras
