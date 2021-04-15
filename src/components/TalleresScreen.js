import React from 'react'
import { getWorkshopGallery } from '../selectors/talleresSelector';
import ObraButtom from './ObraButtom';

const TalleresScreen = () => {
    const gallery = getWorkshopGallery();

    return (
        <div className="container-fluid fh5co-content-box" style={{backgroundColor:'#464646', marginTop: '-170px'}}>
            <div className="container">
                <div className="row festivals" style={{color: '#fff'}}>
                    <div className="col-md-12">
                        <div className="quote-box2 wow bounceInDown" data-wow-delay=".25s">
                            <h2> Talleres </h2>
                        </div>
                        <hr />
                        <p className="wow">Con el objetivo de difundir el arte de los títeres y generar herramientas que lleven a la profesionalización de esta disciplina ofrecemos programas de formación que abordan la exploración de diversas técnicas de animación de títeres, talleres de construcción y laboratorios de experimentación de la relación entre el cuerpo y el objeto en escena.
                        Dirigidos a artistas escénicos, visuales, docentes, psicólogos, niños y jóvenes. </p>
                        <ul>
                            <li>Introducción al teatro de títeres.</li>
                            <li>Entrenamiento para titiriteros.</li>
                            <li>Títeres de mesa y manipulación directa.</li>
                            <li>Teatro de objetos.</li>
                            <li>Teatro negro.</li>
                            <li>Teatro de sombras.</li>
                            <li>Taller de construcción de títeres.</li>
                            <li>Animación Stop motion para niños y jóvenes.</li>
                        </ul>
                        <p className="wow">Para mas información sobre los talleres comunicate con nosotros:</p>
                        <ul>
                            <li><a href="tel:3339027092">+52 33 3902 7092</a></li>
                            <li><a href="mailto:contacto@maikateatro.com">contacto@maikateatro.com</a></li>
                            <li><a href="mailto:carsoklev@hotmail.com">carsoklev@hotmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '-100px'}}>
                    <ObraButtom gallery={ gallery } />
                </div>
            </div>
        </div>
    )
}

export default TalleresScreen

