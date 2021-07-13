import React from 'react';

import { Header } from './components/Header/Header';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';

import bannerImg from './assets/banner.svg';
import arrowLeft from './assets/arrow-left.svg';
import arrowRigth from './assets/arrow-rigth.svg';

import './app.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
        <Header/>


      {/* Banner */}
      <img src={bannerImg} alt="bannerImg" />


      {/* Title Best Sellers */}
      <div className="container-shelf">
        <span> Mais vendidos </span>
        <div className="details-bar"></div>
      </div>


      {/* Container Catalog */}
      <div className="container-catalog">
        <img src={arrowLeft} alt="arrowLeft" className="arrowLeft"/>
        <Catalog/>
        <Catalog/>
        <Catalog/>
        <Catalog/>
        <img src={arrowRigth} alt="arrowRigth" className="arrowRigth"/>
      </div>


      {/* Container Event */}
      <div className="container-event">
        <h1> Participe de nossas news com promoções e novidades! </h1>

        <form className="container-form">
          <input type="text" className="input"/>

          <input type="text" className="input"/>

          <button className="button-submit">
            <p> Eu quero! </p>
          </button>
        </form>
      </div>

      <div className="contianer-footer">
        <Footer/>
      </div>


    </div>
  );
}

export default App;
