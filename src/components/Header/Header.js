import React from 'react'

import logoImg from '../../assets/logo.svg'
import searchImg from '../../assets/search.svg'
import userImg from '../../assets/user.svg'
import carImg from '../../assets/car.svg'

import './style.css'

export function Header({ numberPurchase, numberCar, controller, clearCar }) {

  return (
    <div className="container-header">
      <img src={logoImg} alt="logoImg" />
      {console.log(controller)}
      <div className="container-search" >
        <input type="text" placeholder="O que está procurando?"/>
        <img src={searchImg} alt="searchImg" />
      </div>

      <div className="container-user">
        <img src={userImg} alt="userImg" />
        <span> Minha Conta </span>
      </div>

      <div className="container-car">
        <img src={carImg} alt="carImg" />

        <div>
          { controller 
            ?  <span> {numberCar} </span> 
            :  <span> {numberPurchase} </span>
          }
        </div>
          
        <button className="clear-car" onClick={clearCar}> x </button>
      </div>
    </div>
  )
}
