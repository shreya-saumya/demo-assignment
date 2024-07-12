import React, {useState} from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import './css/bikedesc.css'
import AppIconButton from '../components/appIconButton'
import { useSelector } from 'react-redux'
import Tabs from '../components/bikeDescription/tabs'



export default function BikeDescription() {
    const [open,] = useState(true)
    const [isPoint, setIsPoint] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const product = useSelector(state=>state.product.currentProductValue)
  return (
    <div style={{textAlign:'center'}}>
      {console.log(product)}
        <img src={product.imgSrc} alt="bike desc"/>
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
          boxShadow:'0px -10px 40px 0px #1C222E'}}
        onClickFunc={()=>{
          setCurrentIndex(1)
          setIsPoint(true)
        }}
        />
       
        <AppIconButton styleProp={{  
          boxShadow:'4px 4px 10px 0px #252B39; box-shadow: -4px -4px 10px 0px #38445A'}} 
          onClickFunc={()=>{
            setCurrentIndex(2)
            setIsPoint(true)
          }}
        title={"Specification"}  width='45%'/>
         </div>
         {isPoint&&<>
          <div style={{margin:'10px'}}><Tabs currentTab={currentIndex} details={product.bikeDetails} /></div>
          <div className="bike-description-footer">
         <div style={{ height:'104px',borderTopLeftRadius: '62px',
                      borderTopRightRadius: '62px', background: '#262E3D'
                    }}>
          <button>Add To Cart</button>
         </div>
         </div>
         </> }
        
        </BottomSheet>
    </div>
  )
}
