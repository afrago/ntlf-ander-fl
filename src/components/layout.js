import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template = ({ children }) => (
 <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 p-0">
        <Header />
      </div>
      <div className="col col-lg-8">
        {children}
      </div>
  </div>
 </div>
)

export default Template
