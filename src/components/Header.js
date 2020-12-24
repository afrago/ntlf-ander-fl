import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        Kaixo, <strong>Ander Frago Landa</strong> naiz 👨‍💻, 
        <br />
        <a href="http://cuatrovientos.org">Cuatrovientos</a> institutoko irakaslea.
        <br />
        Orri honetan, lanbide heziketako zikloetan ematen ditudan edukien bilduma egiten dut.
        <br />
        Espero dut gustokoa izatea. ❤
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
