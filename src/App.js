import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/main-container-comp/Home';
import Explore from './components/main-container-comp/Explore';
import Admin from './components/main-container-comp/Admin';
import Footer from './components/Footer';
import CustYO from './components/main-container-comp/CustYO';

export const CartContext = React.createContext;

export default function App() {

  useEffect(() => {
    setTimeout(()=>{
      document.getElementById('preloader').style.display = 'none';
    }, 1500);
  });

  return (
    // <CartContext.Provider value={''}>
      <div className="app">
        <div id='preloader'>
          <img className="preloader--img" src={require("./images/GRAFFITEE@2x.png")} alt="graffitee-logo"/>
        </div>
        <Header />
        <div className="main--container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/custyo' element={<CustYO/>}/>
            <Route path='/admin' element={<Admin/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    // </CartContext.Provider>
  );
}

