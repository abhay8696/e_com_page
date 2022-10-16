import React from 'react';
import '../styles/lightbox.css'

const Lightbox = props => {
    const { toggleLightMode, lightMode, shoeImages, selected } = props;
    return (
        <div className='lightbox'>
            <div className='lightBack' onClick={()=>{toggleLightMode()}}></div>
            <div className='lightBody'>
                <img src={selected[0]} className='mainImg'/>
                <div className='leftArrow'>
                    <svg onClick={()=> ''}
                        xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3"/>
                    </svg>
                </div>
                <div className='rightArrow'>
                    <svg onClick={()=> ''}
                        xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3"/>
                    </svg>
                </div>
                {/* <div className='thumbnails'>
                    <div>{shoeImages.image1}</div>
                    <div>{shoeImages.image2}</div>
                    <div>{shoeImages.image3}</div>
                    <div>{shoeImages.image4}</div>
                </div> */}
            </div>
        </div>
    );
};

export default Lightbox;