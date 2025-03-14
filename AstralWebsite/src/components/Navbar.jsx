import { Link } from "react-router-dom";

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Purpose>">Purpose</Link></li>
            <li><Link to="Explore>">Explore</Link></li>
          
        </ul>
    </nav>
  )
}

export default Navbar