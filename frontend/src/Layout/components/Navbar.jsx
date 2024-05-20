import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h1>Selling</h1>
        <ul>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="">Products</Link></li>
          <li><Link className='link' to="">About us</Link></li>
          <li><Link className='link' to="">Special</Link></li>
          <li><Link className='link' to="">Testimonials</Link></li>
          <li><Link className='link' to="">Blog</Link></li>
          <li><Link className='link' to="">Contact</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar