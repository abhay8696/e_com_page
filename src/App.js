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
  const [ selectedQty, setSelectedQty ] = useState(0);
  const [ cartData, setCartData ] = useState([]);

  //functions
  const 
  chooseShoe = num=> {
    setSelectedQty(0);
    if(num >= 5){
      return setSelected([shoeImages[0], 1]);
    }
    else if(num <= 0){
      return setSelected([shoeImages[3], 4]);
    }
    return setSelected([shoeImages[num-1], num])
  },
  addMinus = num=> {
    if(num<=0) return setSelectedQty(0);
    return setSelectedQty(num);
  },
  addToCart = ()=> {
    if(selectedQty <=0 ) return console.log('empty cart!');
    let newCart = [];
    let data = {
      shoeImg: selected[0],
      qty: selectedQty
    }
    if(cartData.length){
      cartData.forEach(i=> {
        if(data && i.shoeImg===data.shoeImg){
          newCart.push({
            shoeImg: i.shoeImg,
            qty: i.qty+data.qty
          })
          data = null;
        }else{
          newCart.push(i)
        }
      })
    }
    if(data) newCart.push(data);
    return setCartData([...newCart]);
    // console.log(cartData)
  }

  return (
    <div className="App">
      <Navbar cartData={cartData}/>
      <div className='body'>
        <ImageDiv chooseShoe={chooseShoe} shoeImages={shoeImages} selected={selected}/>
        <ProductInfo selectedQty={selectedQty} addMinus={addMinus} addToCart={addToCart}/>
      </div>
    </div>
  );
}

export default App;
