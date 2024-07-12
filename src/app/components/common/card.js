import React from 'react'
import './css/card.css'
export default function Card({imgSrc, bikeDetails, styleProp,headerSlot, onClickFunc }) {
    console.log("here comin on card", imgSrc)

  return (

        <div  className="card" style={{ ...styleProp}} onClick={onClickFunc} >
       {headerSlot&&headerSlot}

       {imgSrc &&
       <div>
         <img src={imgSrc} alt="some alt" style={{maxWidth: '100%'}}/>
       </div>}
        {bikeDetails&&
        <div >
            <div className='bike-name'>{bikeDetails.name}</div>
            <div  className='bike-model'>{bikeDetails.model}</div>
            <div className='bike-price'>{bikeDetails.price}</div>
            </div>}
        </div>
  )
}
