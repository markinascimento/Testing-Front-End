import React from 'react'

import logoImg from '../../assets/logo.svg'
import searchImg from '../../assets/search.svg'
import userImg from '../../assets/user.svg'
import carImg from '../../assets/car.svg'

import './style.css'

export function Header() {
  return (
    <div className="container-header">
      <img src={logoImg} alt="logoImg" />

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
          <span> 1 </span>
        </div>
      </div>
    </div>
  )
}