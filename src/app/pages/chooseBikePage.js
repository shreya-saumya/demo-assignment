import React, {useState, useEffect} from 'react'
import FilterTab from '../components/chooseBike/filterTab'
import Card from '../components/common/card'
import AppIconButton from '../components/appIconButton'
import './css/choosebike.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductList, setProductValue } from '../../redux/actions/productListAction'

export default function ChooseBikePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const product = useSelector(state=>state.product)
  const [currentIndex, setCurrentIndex] = useState()
  useEffect(()=>{
    dispatch(()=>getAllProductList())
  },[])
  return (
    <div >
        <Card imgSrc={product.flatOffProduct.imgSrc} 
          key={0}
        styleProp={{margin:'30px', textAlign:'center'}}  onClickFunc={()=>{
          dispatch(setProductValue(product.flatOffProduct))
          navigate('/description')}}
         bikeDetails={product.flatOffProduct.bikeDetails}/>
        <FilterTab/>
        <div  style={{display:'flex', flexDirection:'row', flexWrap:'wrap', padding:'10px',
         justifyContent:'space-between', rowGap:'20px', columnGap:'10px'}}>
        {product.productList.map((item, index)=>{
           return  <Card imgSrc={item.imgSrc} 
           key={index}
           onClickFunc={()=>{dispatch(setProductValue(item)); navigate('/description')}}
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
