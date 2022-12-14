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
import Lightbox from './components/lightbox';

function App() {
  const shoeImages= [image1, image2, image3, image4];
  const [ selected, setSelected ] = useState([shoeImages[0], 1]);
  const [ selectedQty, setSelectedQty ] = useState(1);
  const [ cartData, setCartData ] = useState([]);
  const [ lightMode, setLightMode ] = useState(false);

  //functions
  const 
  chooseShoe = num=> {
    setSelectedQty(1);
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
  },
  deleteItem = shoe=> {
    console.log('delete')
    console.log(shoe);
    let newCart = [];
    cartData.forEach(i=> {
      if(i.shoeImg !== shoe) newCart.push(i);
    })
    setCartData([...newCart]);
    return console.log(newCart);
  },
  toggleLightMode = ()=> {
    return setLightMode(!lightMode);
  }

  return (
    <div className="App">
      <Navbar cartData={cartData} deleteItem={deleteItem} notification={cartData.length}/>
      <div className='body'>
        <ImageDiv chooseShoe={chooseShoe} shoeImages={shoeImages} selected={selected} toggleLightMode={toggleLightMode}/>
        <ProductInfo selectedQty={selectedQty} addMinus={addMinus} addToCart={addToCart}/>
      </div>
      {lightMode ? 
        <Lightbox 
          toggleLightMode={toggleLightMode} 
          lightMode={lightMode}
          shoeImages={shoeImages}
          selected={selected}
          chooseShoe={chooseShoe}
        /> 
      : null}

      <p>Frontend Mentor Solution by <a href='https://github.com/abhay8696/e_com_page.git' target="_blank">abhay8696</a></p>
    </div>
  );
}

export default App;
