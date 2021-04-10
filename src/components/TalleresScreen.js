import React from 'react'

const TalleresScreen = () => {
    
    return (
        <div className="container-fluid fh5co-content-box" style={{backgroundColor:'#464646', marginTop: '-100px'}}>
            <div className="container">
                <div className="row festivals" style={{color: '#fff'}}>
                    <div className="col-md-12">
                        <div className="quote-box2 wow bounceInDown" data-wow-delay=".25s">
                            <h2> Talleres </h2>
                        </div>
                        <hr />
                        <p className="wow">En Maika Teatro impartimos talleres de: </p>
                        <ul>
                            <li>Elavoración de titeres para niños, jonvenes y adultos</li>
                            <li>Expresion corporal y danza</li>
                        </ul>
                        
                        <p className="wow">Para mas información sobre los talleres comunicate con nosotros:</p>
                        <ul>
                            <li><a href="tel:3339027092">+52 33 3902 7092</a></li>
                            <li><a href="mailto:contacto@maikateatro.com">contacto@maikateatro.com</a></li>
                            <li><a href="mailto:carsoklev@hotmail.com">carsoklev@hotmail.com</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TalleresScreen

