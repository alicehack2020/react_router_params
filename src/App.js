 import './App.css';
import Header from './components/header';
import Home from "./components/Home";
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import NotFount from './components/NotFount';
 
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
   <Header /> 
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Product_list" element={<AllProducts />} />
      <Route path='/Product_list/:prodId' element={<ProductDetail/>} />
      <Route path='*' element={<NotFount/>} />
    </Routes>
   </div>
  );
}

export default App;
