import React from 'react'
import { getObras } from '../selectors/ObrasSelector'
import ObraCard from './ObraCard';

function ObrasGrid() {
    const obras = getObras();
    
    return (
        <div id="obras" className="row gallery" style= {{marginTop: "20px", paddingTop: "20px"}}>
            {
                obras.map( obra => 
                    <ObraCard { ...obra } key = {obra.id} />
                )
            }
        </div>
    )
}

export default ObrasGrid
