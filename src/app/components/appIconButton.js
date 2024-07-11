import React from 'react'
import './css/iconButton.css'
import { primary, secondary } from '../../App'
export default function AppIconButton({isSelected, imgSrc,
    height='44px',
    width='44px',
    padding='8px',
    title, 
    onClickFunc}) {
  return (
    <>
    <button style={{ backgroundColor: isSelected ? secondary : primary, 
    borderRadius:'10px', border:'1px',height,width, padding }}
     onClick={onClickFunc}>
    {title || <img src={imgSrc} />}
    </button>

    </>
   
  )
}
