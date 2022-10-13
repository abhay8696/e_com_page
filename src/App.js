import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ImageDiv from './components/imageDiv';
import ProductInfo from './components/productInfo';
import { useState } from 'react';

//images
import image1 from './data/images/image-product-1.jpg'
import image2 from './data/images/image-product-2.jpg'
import image3 from './data/images/image-product-3.jpg'
import image4 from './data/images/image-product-4.jpg'

function App() {
  const shoeImages= [image1, image2, image3, image4];
  const [ selected, setSelected ] = useState([shoeImages[0], 1]);

  //functions
  const 
  chooseShoe = num=> {
    if(num >= 5){
      return setSelected([shoeImages[0], 1]);
    }
    else if(num <= 0){
      return setSelected([shoeImages[3], 4]);
    }
    return setSelected([shoeImages[num-1], num])
  }
  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <ImageDiv chooseShoe={chooseShoe} shoeImages={shoeImages} selected={selected}/>
        <ProductInfo />
      </div>
    </div>
  );
}

export default App;
