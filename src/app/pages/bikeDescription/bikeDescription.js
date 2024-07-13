import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import './bike-description.css';
import AppIconButton from '../../components/appIconButton';
import { useSelector } from 'react-redux';
import Tabs from '../../components/bikeDescription/tabs';
import {  secondary } from '../../../App';

export default function BikeDescription() {
  const [open] = useState(true);
  const [isPoint, setIsPoint] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = useSelector((state) => state.product.currentProductValue);
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={product.imgSrc} alt="bike desc" />
      <BottomSheet
        open={open}
        onDismiss={() => {
          setIsPoint(false);
        }}
        blocking={false}
        snapPoints={isPoint ? ({ maxHeight }) => [maxHeight / 2, maxHeight * 2] : () => []}
      >
        <div className='bike_description--desc-spec-btn-wrapper'>
          <AppIconButton
            title={'Description'}
            width="45%"
            styleProp={{
              boxShadow: currentIndex===1? '4px 4px 10px 0px rgba(37, 43, 57, 1)':`4px 4px 8px 0px rgba(32, 38, 51, 1) inset`,
              color:currentIndex===1?secondary:'white'
            }}
            onClickFunc={() => {
              setCurrentIndex(1);
              setIsPoint(true);
            }}
          />

          <AppIconButton
            styleProp={{
              boxShadow: currentIndex===2? '4px 4px 10px 0px rgba(37, 43, 57, 1)':`4px 4px 8px 0px rgba(32, 38, 51, 1) inset`,
              color:currentIndex===2?secondary:'white'
            }}
            onClickFunc={() => {
              setCurrentIndex(2);
              setIsPoint(true);
            }}
            title={'Specification'}
            width="45%"
          />
        </div>
        {isPoint && (
          <>
            <div style={{ margin: '10px' }}>
              <Tabs currentTab={currentIndex} details={product.bikeDetails} />
            </div>
            <div className="bike_description-footer-wrapper">
                <div className='bike_description-footer'>
                <span className='bike_description-sub-footer-price'>{product.bikeDetails.price}</span>
                <button className='bike_description-sub-footer-button' style={{background:secondary}}>Add To Cart</button>
                </div>
               
              </div>
     
          </>
        )}
      </BottomSheet>
    </div>
  );
}
