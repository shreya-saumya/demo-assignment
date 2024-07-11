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
            imgSrc:'/assets/filter/accessory.svg',
            title:''
        },
        {
            imgSrc:'/assets/filter/cycle.svg',
            title:''
        },
        {
            imgSrc:'/assets/filter/mountain.svg',
            title:''
        },
        {
            imgSrc:'/assets/filter/Road.svg',
            title:''
        }
    ]
 
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {filterOptions.map((item, index)=>{
            return <AppIconButton imgSrc={item.imgSrc} title={item.title} isSelected={currentIndex===index} onClickFunc={()=>setCurrentIndex(index)}/>
        })}
        
    </div>
  )
}
