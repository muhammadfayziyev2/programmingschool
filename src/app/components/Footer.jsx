'use client'

import Link from 'next/link';
import React from 'react'
import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="site-footer">
          <div className="footer-content">
              <div className="footer-logo">
                  <h2 className='school-name'>Programming School</h2>
              </div>

              <div className="footer-links">
                  <Link href="/" className='footer-link'>Bosh sahifa</Link>
                  <Link href="/courses" className='footer-link'>Biz haqimizda</Link>
                  <Link href="/about" className='footer-link'>Yaratuvchilar</Link>
              </div>

              <div className="footer-social">
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
          </div>

      </footer>
  )
}

export default Footer