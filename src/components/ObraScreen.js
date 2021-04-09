import React from 'react'
import { useParams } from 'react-router-dom'
import { getObraById, getImagesWithText, getGallery } from '../selectors/ObrasSelector';
import ObraTop from './ObraTop';
import ObraMiddle from './ObraMiddle';
import ObraCredits from './ObraCredits';
import ObraButtom from './ObraButtom';
import imgBackground from '../images/negro-large-bg.jpg';

const ObraScreen = () => {
    const { id } = useParams();
    const {name, intro, more, credits, mainImg, video} = getObraById(id);
    const imagesWithText = getImagesWithText(id);
    const gallery = getGallery(id);

    return (        
        <div className="container-fluid fh5co-network" data-parallax="scroll" data-image-src={ imgBackground } style={{marginTop: '-100px', backgroundRepeat: "repeat-x"}}>
            <div className="container">
                <ObraTop id={id} name={name} intro={intro} more={more} mainImg={ mainImg } video={video}/>
                {
                    imagesWithText.map( (iwt, index) => <ObraMiddle iwt={iwt} index={index} key={iwt.id}/>)
                }
                <ObraCredits credits={credits} />
                <ObraButtom gallery={gallery} />
            </div>
        </div>
    )
}

export default ObraScreen
