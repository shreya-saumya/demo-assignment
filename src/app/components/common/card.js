import React from 'react'
import './css/card.css'
export default function Card({imgSrc, bikeDetails, styleProp, width, height}) {
  return (
    <div style={{...styleProp}}>
        <div  class="card" style={{height, width}} >
        <img src={imgSrc} alt="some alt"/>
        {bikeDetails&&
        <div style={{color:'white'}}>
            <div class='bike-name'>{bikeDetails.name}</div>
            <div  class='bike-model'>{bikeDetails.model}</div>
            <div class='bike-price'>{bikeDetails.price}</div>
            </div>}
        </div>
   
    </div>
  )
}
