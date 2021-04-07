import React from 'react'
import parse from 'html-react-parser';

const ObraMiddle = ({iwt, index}) => {
    const {description, url, id} = iwt;
    const image = (<div className="col-md-6">
        <figure className="wow"> 
            <img src={url} alt={id} className="img-fluid" /> 
        </figure>
    </div>);

    const text = description.startsWith('<') ? parse(description) : (<p className="wow">{description}</p>);

    return (
        <div className="row" style={{marginTop: '80px'}}>
            { index % 2 === 0 && image }
            <div className="col-md-6">      
                { text }         
            </div>
            { index % 2 !== 0 && image }
        </div>
    )
}

export default ObraMiddle
