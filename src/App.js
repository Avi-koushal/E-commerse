import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/products" element ={<Products/>}></Route>
        <Route exact path="/products/:id" element ={<Product/>}></Route>
        <Route exact path="/cart" element ={<Cart/>}></Route>
      </Routes>
    </>
  );
}

export default App;
