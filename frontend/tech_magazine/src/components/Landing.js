import React from 'react'
import logo2 from "../logo/logo2.svg"
import {Link} from "react-router-dom";

//import LoadingMask from './LoadingMask'

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing">BETYÁR NEWS</h1>
      <div className="overlay"></div>
      <div className="flip-box">
        <Link to="/wall">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <div className="icon"><img src={logo2} alt="logo2"></img></div>
            </div>
            <div className="flip-box-back">
              <div className="icon"><img src={logo2} alt="logo2"></img></div>
            </div>
          </div>
        </Link>
      </div>
      <h3>#1 Selling Website, Magazine and News</h3>
      <div className="link-container">
        <Link to="/wall"><div className="link"></div></Link>
      </div>
    </div>
  )
}

export default Landing
