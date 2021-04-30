import React from 'react'
import bannerImg from '../images/kafeta_pintor.gif';

const Banner = () => {
    return (
        <>
            <div className="container">
                <a href="https://www.facebook.com/Maika-Teatro-430703303679301" target="_blank" rel="noreferrer">
                    <img src={ bannerImg } alt='banner pintor'/> 
                </a>
            </div>            
        </>
    )
}

export default Banner
