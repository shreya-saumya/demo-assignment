import React from 'react'

export default function Card({imgSrc, titleSlot}) {
  return (
    <div>
        <img src={imgSrc}/>
        {titleSlot&&<div>{titleSlot}</div>}
    </div>
  )
}
