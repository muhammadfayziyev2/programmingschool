'use client'

import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import AboutUs from './AboutUs'
import Subjects from './Subjects'
import Kourse from './Kourse'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <MainPage/>
        <Subjects/>
        <AboutUs/>
        <Kourse/>
        <Footer/>
    </div>
  )
}

export default HomePage