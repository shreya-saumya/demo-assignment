import React from 'react'
import FilterTab from '../components/chooseBike/filterTab'
import Card from '../components/common/card'

export default function ChooseBikePage() {
  const cards=[
    {imgSrc:'/assets/bikes/newBike.svg',
    bikeDetails:{name:'Road Bike',
    model:'PEUGEOT - LR01', price:'$ 1,999.99'}
  },
    {imgSrc:'/assets/bikes/helment.svg',
    bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120'}
  },
    {imgSrc:'/assets/bikes/roadBike.svg'},

  ]
  return (
    <div >
        <Card imgSrc={'/assets/common/homepagemainBike.svg'} 
        styleProp={{display:'flex', flexDirection:'column', }}
        width={'350px'}/>
        <FilterTab/>
        <div  style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {cards.map((item)=>{
           return  <Card imgSrc={item.imgSrc} 
           styleProp={{display:'flex', flexDirection:'column', }}
           width={'165px'} height={'241px'} bikeDetails={item.bikeDetails}/>
       
        })}
            </div>
   
    </div>
  )
}
