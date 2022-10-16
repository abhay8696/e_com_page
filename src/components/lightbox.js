import React from 'react';
import '../styles/lightbox.css'

const Lightbox = props => {
    const { toggleLightMode, lightMode, shoeImages, selected, chooseShoe } = props;

    //functions
    const handleImgClass = img=> {
        if(img === selected[0]) return 'thumbImageSelected';
    }

    return (
        <div className='lightbox'>
            <div className='lightBack' onClick={()=>{toggleLightMode()}}></div>
            <div className='lightBody'>
                <img src={selected[0]} className='mainImg'/>
                <div className='leftArrow' onClick={()=> chooseShoe((selected[1]-1))}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3"/>
                    </svg>
                </div>
                <div className='rightArrow' onClick={()=> chooseShoe((selected[1]+1))}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3"/>
                    </svg>
                </div>
                <div className='thumbnails'>
                    <img src={shoeImages[0]} className={handleImgClass(shoeImages[0])} onClick={()=> chooseShoe(1)}/>
                    <img src={shoeImages[1]} className={handleImgClass(shoeImages[1])} onClick={()=> chooseShoe(2)}/>
                    <img src={shoeImages[2]} className={handleImgClass(shoeImages[2])} onClick={()=> chooseShoe(3)}/>
                    <img src={shoeImages[3]} className={handleImgClass(shoeImages[3])} onClick={()=> chooseShoe(4)}/>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;