import React from 'react';
import Header from '../components/common/header';
import './mainLayout.css';
import { useNavigate } from 'react-router-dom';

import AppIconButton from '../components/appIconButton';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductDetailsLayout() {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.currentProductValue);
  return (
    <div className="wrapper">
      <Header
        title={'PEUGEOT - LR01'}
        leftIcon={
          <AppIconButton
            imgSrc={'/assets/icons/chevron.left.svg'}
            isSelected
            onClickFunc={() => navigate('/')}
          />
        }
      />
      <main>
        <div className="scrollable_content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
