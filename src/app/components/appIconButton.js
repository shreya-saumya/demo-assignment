import React from 'react'
import './css/iconButton.css'
import {  secondary, ternary } from '../../App'
export default function AppIconButton({isSelected, imgSrc,
    height='44px',
    width='44px',
    padding='8px',
    title, 
    onClickFunc, 
    styleProp}) {
  return (
    <button style={{ backgroundColor: isSelected ? secondary : ternary, 
    borderRadius:'10px', border:'1px',height,width, padding , ...styleProp,
    color:'white'
  }}
     onClick={onClickFunc}>
    {title || <img src={imgSrc} />}
    </button>
   
  )
}
