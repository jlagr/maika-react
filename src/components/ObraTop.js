import React from 'react'
import { Link } from 'react-scroll'

const ObraTop = ({id, name, intro, more, mainImg, video }) => {
    
    const mainImage = video !== undefined ? 
        (<iframe 
            className="img-fluid" 
            style={{marginTop: '-10px', height: '305px'}}
            width="560" 
            height="315" 
            src={video}
            title={id}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >
        </iframe>) :
        (<figure className="wow"> 
            <img src={ process.env.PUBLIC_URL + mainImg } alt={ `main_${id}` } className="img-fluid" style={{marginTop: '50px'}}/>
        </figure>);

        return (
            <div className="row" id="start">
                <div className="col-md-6">
                    <h2 className="wow">{ name }</h2>
                    <hr />
                    <p className="wow">{ intro }</p>
                    <p className="wow">{ more }</p>
                    {
                        name === "Paik'am" ? (
                            <p className="paikam_link"> 
                                <Link activeClass="active" style={{color: "#ff8013"}} to="giraPaikam2022" spy={true} smooth={true} duration={500}>Gira 2022 </Link>
                                <label> • </label> 
                                <Link activeClass="active" style={{color: "#ff8013"}} to="prensaPaikam" spy={true} smooth={true} duration={500}>Prensa </Link>
                                <label> • </label> 
                                <Link activeClass="active" style={{color: "#ff8013"}} to="credits" spy={true} smooth={true} duration={500}>Elenco </Link>
                            </p>
                        )
                        : ''
                    }
                    
                </div>
                <div className="col-md-6">
                    {mainImage}
                </div>
            </div>
        )
}

export default ObraTop
