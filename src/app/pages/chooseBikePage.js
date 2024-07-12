import React, { useState, useEffect } from 'react';
import FilterTab from '../components/chooseBike/filterTab';
import Card from '../components/common/card';
import AppIconButton from '../components/appIconButton';
import './css/choosebike.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductList, setProductValue } from '../../redux/actions/productListAction';

export default function ChooseBikePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    dispatch(() => getAllProductList());
  }, []);

  return (
    <div>
      <div >
      <Card
        className='choose-bike-page-banner'
        imgSrc={product.flatOffProduct.imgSrc}
        key={0}
        styleProp={{ margin: '30px 30px 0 30px', textAlign: 'center' }}
        onClickFunc={() => {
          dispatch(setProductValue(product.flatOffProduct));
          navigate('/description');
        }}
        bikeDetails={product.flatOffProduct.bikeDetails}
      />
      </div>
      
      <FilterTab />
      <div className="choose_bike_page--grid-container">
        {product.productList.map((item, index) => {
          return (
            <Card
              imgSrc={item.imgSrc}
              key={index}
              onClickFunc={() => {
                dispatch(setProductValue(item));
                navigate('/description');
              }}
              headerSlot={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <AppIconButton
                    styleProp={{ background: 'none' }}
                    imgSrc={
                      currentIndex === index
                        ? '/assets/common/heart-unselected.svg'
                        : '/assets/common/heart-selected.svg'
                    }
                    onClickFunc={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                  />
                </div>
              }
              styleProp={{ transform: 'skew(0, 350deg)', padding: '20px' }}
              bikeDetails={item.bikeDetails}
            />
          );
        })}
      </div>
    </div>
  );
}
