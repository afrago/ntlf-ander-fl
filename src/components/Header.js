import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header" className="col col-lg-4">
    <div className="container-fluid">
      <div className="row">
        <div className="inner col-12">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            Kaixo, <strong>Ander Frago Landa</strong> naiz 👨‍💻,
            <br />
            <a href="http://cuatrovientos.org">Cuatrovientos</a> institutoko
            irakaslea.
            <br />
            Orri honetan, lanbide heziketako zikloetan ematen ditudan edukien
            bilduma egiten dut.
            <br />
            Espero dut gustokoa izatea. ❤
          </h1>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  </header>
)

export default Header
