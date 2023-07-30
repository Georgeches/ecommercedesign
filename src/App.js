import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//components
import Navbar from './components/Navbar';
import CartOffcanvas from './components/CartOffcanvas';
import Carousel from './components/Carousel';
import Designs from './components/Designs';
import ReadySection from './components/ReadySection';
import Footer from './components/Footer';
import ProductView from './components/ProductDetail';
import Allproducts from './components/Allproducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <>
            <Navbar/>
            <Carousel/>
            <ReadySection/>
            <Designs/>
            <Footer/>
            <CartOffcanvas/>
            </>
          }>
          </Route>

          <Route path="/viewproduct" element={
            <>
            <Navbar/>
            <ProductView/>
            <CartOffcanvas/>
            </>
          }>
          </Route>

          <Route path="/all" element={
            <>
            <Navbar/>
            <Allproducts/>
            </>
          }>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
