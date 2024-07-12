import React from 'react'
import Header from '../components/common/header'
import Footer from '../components/common/footer/footer'
import  './mainLayout.css'

import AppIconButton from '../components/appIconButton';
import { Outlet } from 'react-router-dom'

export default function ProductDetailsLayout() {
  return (
         <div class="wrapper">
        <Header title={'PEUGEOT - LR01'}  leftIcon={<AppIconButton imgSrc={'/assets/icons/chevron.left.svg'} isSelected />}/>
        <main>
            <div class="scrollable_content">
                <Outlet/>
            </div>

        </main>
        <div class="footer">
            {/* <Footer/> */}
        </div>
    </div>

  )
}
