import {useState} from 'react'
import AppIconButton from '../appIconButton'

export default function FilterTab() {
    const [currentIndex, setCurrentIndex ] = useState(0)
    const filterOptions=[
        {
            imgSrc:'',
            title:'All'
        },
        {
            imgSrc:'/assets/filter/bolt.svg',
            title:''
        },
        {
            imgSrc:'/assets/filter/Road.svg',
            title:''
        },
        {
            imgSrc:'/assets/filter/accessory.svg',
            title:''
        },
        {
            imgSrc:'/assets/filter/mountain.svg',
            title:''
        },
     
       
    ]
 
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', marginBottom:'20px' }}>
        {filterOptions.map((item, index)=>{
            return <AppIconButton 
            key={index}
            styleProp={{marginTop:`${index*(-10)+(filterOptions.length-1)*10}px`}}
            imgSrc={item.imgSrc} title={item.title} 
            isSelected={currentIndex===index} 
            onClickFunc={()=>setCurrentIndex(index)}/>
        })}
        
    </div>
  )
}
