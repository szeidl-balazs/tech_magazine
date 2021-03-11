import React from 'react'
import logo3 from "../logo/logo3.svg"

function Navbar() {
  return (
    <div className="navbar-conatiner">
      <div className="navbar">
        <img src={logo3} alt="logo3"></img>
        <h4>About</h4>
        <h4>Community</h4>
        <h4 className="right">Login</h4>
      </div>
    </div>
  )
}

export default Navbar
