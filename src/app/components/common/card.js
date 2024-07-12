import React from 'react'
import './css/card.css'
export default function Card({imgSrc, bikeDetails, styleProp,headerSlot, firstCardValue, onClickFunc }) {

  return (

        <div  className="card" style={{ ...styleProp}} onClick={onClickFunc} >
       {headerSlot&&headerSlot}
        <img src={imgSrc} alt="some alt"/>
        {bikeDetails&&
        <div >
            <div className='bike-name'>{bikeDetails.name}</div>
            <div  className='bike-model'>{bikeDetails.model}</div>
            <div className='bike-price'>{bikeDetails.price}</div>
            </div>}
        </div>
  )
}
