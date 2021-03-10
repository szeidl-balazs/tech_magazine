import React from 'react'
import logo2 from "../logo/logo2.svg"
//import LoadingMask from './LoadingMask'

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing">OUTLAW NEWS</h1>
      <div className="overlay"></div>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="icon"><img src={logo2} alt="logo2"></img></div>
          </div>
          <div className="flip-box-back">
            <div className="icon"><img src={logo2} alt="logo2"></img></div>
          </div>
        </div>
      </div>
      <h3>#1 Selling Website, Magazine and News</h3>
    </div>
  )
}

export default Landing
