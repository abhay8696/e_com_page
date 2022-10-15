import React from 'react';
import '../styles/imageDiv.css'

//images
import image1 from '../data/images/image-product-1.jpg'
import image2 from '../data/images/image-product-2.jpg'
import image3 from '../data/images/image-product-3.jpg'
import image4 from '../data/images/image-product-4.jpg'

const ImageDiv = props => {
    const { selected, chooseShoe, shoeData } = props;
    // console.log(selected);
    // console.log(image1);
    console.log(image1===selected[0])

    //functions
    const handleImgClass = img=> {
        if(img === selected[0]) return 'thumbImageSelected';
    }
    return (
        <div className='imageDiv'>
            <div className={`previewDiv${selected[1]}`}>
                <img src={selected[0]} className='productImage'/>
                <div className='arrowButt'>
                    <svg onClick={()=> chooseShoe((selected[1]-1))}
                        xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3"/>
                    </svg>
                </div>
                <div className='arrowButt'>
                <svg onClick={()=> chooseShoe((selected[1]+1))}
                    xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                    <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3"/>
                </svg>
                </div>
            </div>
            <div className='thumbnails'>
                {/* <img src={image1} className='thumbImageSelected' onClick={()=> chooseShoe(1)}/> */}
                <img src={image1} className={handleImgClass(image1)} onClick={()=> chooseShoe(1)}/>
                <img src={image2} className={handleImgClass(image2)} onClick={()=> chooseShoe(2)}/>
                <img src={image3} className={handleImgClass(image3)} onClick={()=> chooseShoe(3)}/>
                <img src={image4} className={handleImgClass(image4)} onClick={()=> chooseShoe(4)}/>
            </div>
        </div>
    );
};

export default ImageDiv;