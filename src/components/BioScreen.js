import React from 'react'
import { useParams } from 'react-router-dom'
import imgBackground from '../images/negro-large-bg.jpg';
import { getElencoPaikamById } from '../selectors/elencoSelectors';

const BioScreen = () => {
    const { id } = useParams();
    const actor = getElencoPaikamById(id);
    const parse = require('html-react-parser');
    if (actor === undefined)
        return (
            <div className="container-fluid fh5co-network" data-parallax="scroll" data-image-src={ imgBackground } style={{marginTop: '-100px', backgroundRepeat: "repeat-x"}}>
               <div className="container">
                  <div className="row bio-text">
                      Record not found
                   </div>
               </div> 
            </div>
        )
    else {
        const {name, image, bio}  = actor;
        return (        
            <div className="container-fluid fh5co-network" data-parallax="scroll" data-image-src={ imgBackground } style={{marginTop: '-100px', backgroundRepeat: "repeat-x"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            {
                                <>
                                    <div className="bio-header">
                                        <div className="bio-image-cropper">
                                            <img className="bio-img" src={ process.env.PUBLIC_URL + image } alt={ id } />
                                        </div>
                                        <p className="bio-name"> {name} </p>
                                    </div>
                                    <div className="bio-text">
                                        { parse(bio) }
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default BioScreen
