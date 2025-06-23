'use client'

import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import AboutUs from './AboutUs'
import Subjects from './Subjects'

const HomePage = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <MainPage/>
        <Subjects/>
        <AboutUs/>
    </div>
  )
}

export default HomePage