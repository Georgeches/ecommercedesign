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
import ContactInfo from './components/ContactInfo';
import ProgressIndicator from './components/ProgressIndicator';
import PaymentForm from './components/PaymentForm';

function App() {
  console.log(JSON.parse(localStorage.getItem("user_details")))
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={
            <>
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
            <ProductView/>
            <CartOffcanvas/>
            </>
          }>
          </Route>

          <Route path="/all" element={
            <>
            <Allproducts/>
            </>
          }>
          </Route>

          <Route path="/checkout" element={
            <>
            <ProgressIndicator/>
            <ContactInfo/>
            </>
          }>
          </Route>

          <Route path="/payment" element={
            <>
            <ProgressIndicator/>
            <PaymentForm/>
            </>
          }>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
