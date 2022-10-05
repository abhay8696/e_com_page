import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ImageDiv from './components/imageDiv';
import ProductInfo from './components/productInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <ImageDiv />
        <ProductInfo />
      </div>
    </div>
  );
}

export default App;
