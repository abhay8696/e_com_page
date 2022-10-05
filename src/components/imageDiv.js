import React, { useState } from 'react';
import '../styles/imageDiv.css'

//images
import image1 from '../data/images/image-product-1.jpg'
import image2 from '../data/images/image-product-2.jpg'
import image3 from '../data/images/image-product-3.jpg'
import image4 from '../data/images/image-product-4.jpg'

const ImageDiv = () => {
    let pic1 = image1, pic2 = image2, pic3 = image3, pic4 = image4;
    const [ selectedImg, setSelectedImg ] = useState(1);
    const changeBackground = (num)=> {
        if(num === 5) num = 1;
        else if(num === 0) num = 4;
        setSelectedImg(num);
    }
    return (
        <div className='imageDiv'>
            <div className={`previewDiv${selectedImg}`}>
                <img src={eval(`pic${selectedImg}`)} className='productImage'/>
                <div className='arrowButt'>
                    <svg onClick={()=> changeBackground(selectedImg-1)}
                        xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3"/>
                    </svg>
                </div>
                <div className='arrowButt'>
                <svg onClick={()=> changeBackground(selectedImg+1)}
                    xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                    <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3"/>
                </svg>
                </div>
            </div>
            <div className='thumbnails'>
                <img src={image1} className='thumbImage' onClick={()=> setSelectedImg(1)}/>
                <img src={image2} className='thumbImage' onClick={()=> setSelectedImg(2)}/>
                <img src={image3} className='thumbImage' onClick={()=> setSelectedImg(3)}/>
                <img src={image4} className='thumbImage' onClick={()=> setSelectedImg(4)}/>
            </div>
        </div>
    );
};

export default ImageDiv;