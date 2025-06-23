'use client'

import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    <div>
      <Header/>
     <div className='aboutUs'>
        <h1>Asoschilar</h1>
     </div>
      <div className='home-difrector'>
        <div className="director-card">
          <img src="IMG_20250414_112944_658 (3).jpg" alt="Director" className="director-image" />
          <div className="director-info">
            <h2 className='name-director'>Muhammadjon</h2>
            <p className="title">Direktor, UKAM O‘quv Markazi</p>
            <p className="bio">
              10+ yillik tajribaga ega, ta’lim tizimida zamonaviy yondashuvlarni olib kirgan
              fidoyi rahbar. O‘quvchilarning yutuqlari — uning ustuvor maqsadi.
            </p>

          </div>
        </div>
        <div className="director-card">
          <img src="IMG_20250414_112944_658 (3).jpg" alt="Director" className="director-image" />
          <div className="director-info">
            <h2>Muhammadjon</h2>
            <p className="title">Direktor, UKAM O‘quv Markazi</p>
            <p className="bio">
              10+ yillik tajribaga ega, ta’lim tizimida zamonaviy yondashuvlarni olib kirgan
              fidoyi rahbar. O‘quvchilarning yutuqlari — uning ustuvor maqsadi.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page