import React from 'react'

import './style.css';

export function Catalog({ 
  Id, image, nameProduct, discout, price, installments,  handlerAddCar 
}) {

  const priceEnd = (price / 100);

      const quantity = installments.map((item) => item.quantity);
      const value = installments.map((item) => item.value / 100);
      const isVisibleDiscount = quantity.length > 0 ? true : false;
      const discountEnd = discout / 100;

  return (
    <div key={Id} className="view-catalog">
      <img src={image} alt="img-product" className="img-product"/>

      <div className="container-descriptions">
        <p className="prodcut-name"> {nameProduct} </p>

        <p> start </p>

        { discout &&
          <p className="discount"> de R$ {discountEnd.toFixed(2)} </p>
        }

        <h1> por R$ {priceEnd.toFixed(2)} </h1>

          { isVisibleDiscount
            ? <span> {`ou em ${quantity}x de R$ ${value}`} </span>
            : <span> Infelizmente não parcelamos esse valor </span>
          }

        <button onClick={handlerAddCar}> COMPRAR </button>
      </div>
    </div>
  )
}
