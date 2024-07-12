import React, {useState} from 'react'
import FilterTab from '../components/chooseBike/filterTab'
import Card from '../components/common/card'
import AppIconButton from '../components/appIconButton'
import './css/choosebike.css'
import { useNavigate } from "react-router-dom";

export default function ChooseBikePage() {
  const navigate = useNavigate();


  const [currentIndex, setCurrentIndex] = useState()
  const cards=[
    {imgSrc:'/assets/bikes/newBike.svg',
    bikeDetails:{name:'Road Bike',
    model:'PEUGEOT - LR01', price:'$ 1,999.99'}
  },
    {imgSrc:'/assets/bikes/helment.svg',
    bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120'}
  },
    {imgSrc:'/assets/bikes/roadBike.svg', bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120'}},
    {imgSrc:'/assets/bikes/roadBike.svg', bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120'}},

  ]
  return (
    <div >
      
        <Card imgSrc={'/assets/bikes/bike-desc.png'} 
          key={0}
        styleProp={{margin:'30px', textAlign:'center'}} onClickFunc={()=>{navigate('/description')}}/>
    
 
        <FilterTab/>
        <div  style={{display:'flex', flexDirection:'row', flexWrap:'wrap', padding:'10px', justifyContent:'space-between'}}>
        {cards.map((item, index)=>{
           return  <Card imgSrc={item.imgSrc} 
           key={index}
           headerSlot={
                  <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <AppIconButton 
                    styleProp={{background:'none' }}
                    imgSrc={currentIndex===index? '/assets/common/heart-unselected.svg':'/assets/common/heart-selected.svg'}  
                    onClickFunc={()=>setCurrentIndex(index)}/>
                  </div>
          }
           styleProp={{ transform: 'skew(0, 350deg)', padding:'20px' }}
           bikeDetails={item.bikeDetails}/>
       
        })}
            </div>
   
    </div>
  )
}
