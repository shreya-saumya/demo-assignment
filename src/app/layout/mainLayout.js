import React from 'react'
import Header from '../components/common/header'
import Footer from '../components/common/footer/footer'
import  './mainLayout.css'

import AppIconButton from '../components/appIconButton';
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="wrapper">
        <Header title={'Choose Your Bike'}  rightIcon={<AppIconButton imgSrc={'/assets/icons/search.svg'} isSelected />}/>
        <main>
            <div className="scrollable_content">
                <Outlet/>
            </div>

        </main>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  
  )
}
