import React from 'react'
import AppIconButton from '../../appIconButton'
import {useState} from 'react'
import { primary, secondary } from '../../../../App'

export default function Footer() {
  const [currentIndex, setCurrentIndex ] = useState(0)
  const filterOptions=[
      {
          imgSrc:'/assets/icons/bicycle.svg',
          title:''
      },
      {
          imgSrc:'/assets/icons/map.svg',
          title:''
      },
      {
          imgSrc:'/assets/icons/cart.svg',
          title:''
      },
      {
          imgSrc:'/assets/icons/person.svg',
          title:''
      },
      {
        imgSrc:'/assets/icons/doc.svg',
        title:''
    }
  ]
return (
  <div style={{display:'flex', justifyContent:'space-evenly', padding:'20px' }}>
      {filterOptions.map((item, index)=>{
          return <AppIconButton 
          key={index}
          styleProp={ currentIndex === index ?
            { backgroundColor: secondary, transform: 'skew(0, 350deg)'}
            : {backgroundColor:primary }}
          imgSrc={item.imgSrc} title={item.title} 
          isSelected={currentIndex===index} 
          onClickFunc={()=>setCurrentIndex(index)}/>
      })}
      
  </div>
)
}
