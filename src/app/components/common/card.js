import React from 'react'
import './css/card.css'
export default function Card({imgSrc, bikeDetails, styleProp,headerSlot, firstCardValue, onClickFunc, key }) {

  return (

        <div  class="card" style={{ ...styleProp}} key={key} onClick={onClickFunc} >
       {headerSlot&&headerSlot}
        <img src={imgSrc} alt="some alt"/>
        {bikeDetails&&
        <div >
            <div class='bike-name'>{bikeDetails.name}</div>
            <div  class='bike-model'>{bikeDetails.model}</div>
            <div class='bike-price'>{bikeDetails.price}</div>
            </div>}
        </div>
  )
}
