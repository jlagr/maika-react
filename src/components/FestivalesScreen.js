import React from 'react'
import { getInternacionales, getNacionales } from '../selectors/festivalesSelector'
import Festival from './Festival';

export const FestivalesScreen = () => {
    const festNacionales = getNacionales();
    const festInternacionales = getInternacionales();

    return (
        <div id="start" className="container-fluid fh5co-content-box" style={{marginTop: '-170px'}}>
            <div className="container">
                <div className="row festivals">
                    <div className="col-12">
                        <div className="quote-box2 wow bounceInDown" data-wow-delay=".25s">
                            <h2> Nacionales </h2>
                        </div>
                    </div>

                    {
                        festNacionales.map( f => <Festival {...f} key={f.id}/>)
                    }
                    
                    <div className="col-12">
                        <div className="quote-box2 wow bounceInDown" data-wow-delay=".25s">
                            <h2> Internacionales </h2>
                        </div>
                    </div>

                    {
                        festInternacionales.map( f => <Festival {...f} key={f.id}/>)
                    }                    

                </div>
                
                
            </div>
        </div>
    )
}
