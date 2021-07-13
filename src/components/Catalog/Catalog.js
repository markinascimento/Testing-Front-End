import React from 'react'

import logo from '../../assets/logo.svg';

import './style.css'

export function Catalog() {
  return (
    <div className="container-main">        
      <img src={logo} alt="logo" />

      <div className="container-description">
        <span> SAPATO FLOATER PRETO </span>

        <h6> stars </h6>

        <h1> por R$ 259,90 </h1>

        <p> ou em 9x de R$ 28,87 </p>

        <button>
          COMPRAR
        </button>
      </div>  
    </div>
  )
}
