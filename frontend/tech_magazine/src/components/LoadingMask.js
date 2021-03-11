import React from 'react'
import logo2 from "../logo/logo2.svg"

function LoadingMask() {
  return (
    <div className="iconn-container">
      {/*<div className="loading-mask">  
      </div>*/}
      <div className="iconn"><img src={logo2} alt="logo2"></img></div>
    </div>
  )
}

export default LoadingMask
