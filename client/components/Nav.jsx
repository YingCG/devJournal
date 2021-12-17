import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <nav className ="Grid-cell">
        <button className='nav-btn'><Link to="/">Home</Link></button>
        <button className='nav-btn'><Link to='/projects' className='nav-link'>Projects</Link></button>
        <button className='nav-btn'><Link to='/tools' className='nav-link'>Tools</Link></button>
      </nav>
    </>
  )
}

export default Nav
