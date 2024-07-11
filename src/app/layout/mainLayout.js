import React from 'react'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import  './mainLayout.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikeDescription from '../pages/bikeDescription';
import DetailedBike from '../pages/detailedBike';
import ChooseBikePage from '../pages/chooseBikePage';
import AppIconButton from '../components/appIconButton';

export default function MainLayout() {

  return (
    <div class="wrapper">
        <Header title={'Choose Your Bike'}  rightIcon={<AppIconButton imgSrc={'/assets/icons/search.svg'} isSelected />}/>

        <main>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ChooseBikePage />} /> 
          <Route path="/description" element={<BikeDescription />} />
          <Route path="/details" element={<DetailedBike />} />
      </Routes>
    </BrowserRouter>
        </main>
        <div class="footer">
            <Footer/>
        </div>
    </div>
  
  )
}
