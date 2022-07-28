import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AppLayout from './components/AppLayout';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';
import CreateProduct from './components/CreateProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Schedule" element={<Schedule />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path='Shop' element={<Shop />} />
        <Route path='ContactUs' element={<ContactUs />} />
        <Route path='CreateProduct' element={<CreateProduct />} />
        
      </Routes>
    </AppLayout>
  </BrowserRouter>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
