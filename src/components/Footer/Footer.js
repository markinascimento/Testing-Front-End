import React from 'react'

import email from '../../assets/email.svg';
import contact from '../../assets/contact.svg';
import logoWhite from '../../assets/logoWhite.svg';
import logoVtex from '../../assets/logoVtex.svg';

import './style.css'

export function Footer() {
  return (
    <div className="container-footer">
     
     <aside className="container-informations">
        <h1> Localização </h1>
        <div></div>
        <p> Avenida Andrômeda, 2000, Bloco 6 e 8 </p>
        <p> Alphavile SP </p>
        <p> brasil@corebiz.ag </p>
        <p> +55 11 3091 1039 </p>
     </aside>

     <main className="container-contact">
       <div className="contact"> 
          <img src={email} alt="email"/>
          <span> ENTRE EM CONTATO </span>
       </div>

       <div className="contact"> 
          <img src={contact} alt="contact"/>
          <span> FALE COM O NOSSO CONSULTOR ONLINE </span>
       </div>
     </main>

     <div className="container-logos">
       <div>
         <span> Created by </span>
         <img src={logoWhite} alt="logoWhite" />
       </div>

       <div>
         <span> Powered by </span>
         <img src={logoVtex} alt="logoVtex" />
       </div>
     </div>

    </div>
  )
}
