import React from 'react'

import Footer from './Footer'
import portfolioPicture from '../assets/images/portfolioPicture.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/#" className="image portfolioPicture">
        <img src={portfolioPicture} alt="Bahay's portrait" />
      </a>
      <h1>
        <strong>Bahay Gulle Bilgi</strong>
      </h1>
      <h2>Software Developer</h2>
    </div>
    <Footer />
  </header>
)

export default Header
