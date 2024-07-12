import React, {useState} from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import './css/bikedesc.css'
import AppIconButton from '../components/appIconButton'



export default function BikeDescription() {
    const [open,] = useState(true)
    const [isPoint, setIsPoint] = useState(false)
  return (
    <div style={{textAlign:'center'}}>
        <img src={'/assets/bikes/bike-desc.png'} alt="bike desc"/>
        <BottomSheet
          className='bike-description-bottom-sheet'
          open={open}
          onDismiss={() => {
            setIsPoint(false)
        }}
          blocking={false}
          backgroundColor="red"
          snapPoints={isPoint?({ maxHeight }) => [maxHeight / 2, maxHeight * 2]:()=>[]}
        >
        <div style={{display:'flex', justifyContent:'space-around', margin:'10px'}}>
        <AppIconButton title={"Description"}  width='45%' 
        styleProp={{
        boxShadow: '-4px -4px 8px 0px #364055 inset'}}
        onClickFunc={()=>setIsPoint(true)}
        />
        <AppIconButton title={"Specification"}  width='45%'/>
         </div>
        </BottomSheet>
    </div>
  )
}
