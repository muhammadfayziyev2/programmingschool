'use client'

import React from 'react'
import Header from './Header'


const Creators = () => {
    return (
        <div>
            <Header/>
            <div className="team-container">
                <div className="team-card">
                    <img src="IMG_20250414_112944_658 (3).jpg" alt="Michael Carter" className="team-image" />
                    <div className="team-info">
                        <h3>Fayziyev Muhammad</h3>
                        <p className='team-p'></p>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/" alt="Ismoil" className="team-image" />
                    <div className="team-info">
                        <h3>Ismoil Olimov</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creators