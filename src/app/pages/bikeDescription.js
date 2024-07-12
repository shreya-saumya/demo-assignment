import React, {useState, useRef} from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import './css/bikedesc.css'
import { primary } from '../../App'
import AppIconButton from '../components/appIconButton'



export default function BikeDescription() {
    const [open, setOpen] = useState(true)

  return (
    <div style={{textAlign:'center'}}>
        <img src={'/assets/bikes/bike-desc.png'}/>
        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet
          open={open}
          onDismiss={() => setOpen(false)}
          blocking={false}
          background='red'
        //   snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
        >
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <AppIconButton title={"Description"} width='auto' styleProp={{boxShadow:' 4px 4px 8px 0px #202633 inset',boxShadow: '-4px -4px 8px 0px #364055 inset'}}/>
        <AppIconButton title={"Specification"} width='auto'/>
         {/* <button class="bike-description-modal-button" style={{background:primary}} onClick={()=>setOpen(true)}>Description</button>
         <button class="bike-description-modal-button" style={{background:primary}} onClick={()=>setOpen(true)}>Specification</button> */}
         </div>
        </BottomSheet>
    </div>
  )
}
