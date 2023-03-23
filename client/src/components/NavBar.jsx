import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className="logo">Mindplore</div>
        <div className="links">
          <Link className='link' to="/?cat=science">Science</Link>
          <Link className='link' to="/?cat=art">Art</Link>
          <Link className='link' to="/?cat=tech">Tech</Link>
          <Link  className='link'  to="/?cat=cinema">Cinema</Link>
          <Link className='link' to="/?cat=Design">Design</Link>
          <span className='link'>John</span>
          <span className='link'>Logout</span>
          <Link  to="/write" className='link'>Write</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar