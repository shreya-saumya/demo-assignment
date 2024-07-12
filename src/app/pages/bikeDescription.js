import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import './css/bikedesc.css';
import AppIconButton from '../components/appIconButton';
import { useSelector } from 'react-redux';
import Tabs from '../components/bikeDescription/tabs';
import {  secondary } from '../../App';

export default function BikeDescription() {
  const [open] = useState(true);
  const [isPoint, setIsPoint] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = useSelector((state) => state.product.currentProductValue);
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={product.imgSrc} alt="bike desc" />
      <BottomSheet
        data-rsbs-root="bike-description-bottom-sheet"
        open={open}
        onDismiss={() => {
          setIsPoint(false);
        }}
        blocking={false}
        snapPoints={isPoint ? ({ maxHeight }) => [maxHeight / 2, maxHeight * 2] : () => []}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px' }}>
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
            <div className="bike-description-footer">
              <div
                style={{
                  height: '70px',
                  borderTopLeftRadius: '42px',
                  borderTopRightRadius: '42px',
                  background: '#262E3D'
                }}
              >
                <span className='bike-description-sub-footer-price'>{product.bikeDetails.price}</span>
                <button className='bike-description-sub-footer-button' style={{background:secondary}}>Add To Cart</button>
              </div>
            </div>
          </>
        )}
      </BottomSheet>
    </div>
  );
}
