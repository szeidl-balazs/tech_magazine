import React from 'react'
import logo3 from "../logo/logo3.svg"
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-conatiner">
      <div className="navbar">
        <img src={logo3} alt="logo3"></img>
        <Link className="link1" to="/">
          <h4>All Articles</h4>
        </Link>
        <Link className="link1" to="/">
          <h4>Tech Articles</h4>
        </Link>
        <Link className="link1" to="/">
          <h4 className="right">Login</h4>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
