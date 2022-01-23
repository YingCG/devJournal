import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <div className ="nav">
        <button className='nav-btn'><Link to="/">Home</Link></button>
        <button className='nav-btn'><Link to='/projects' className='nav-link'>Projects</Link></button>
        <button className='nav-btn'><Link to='/humanskills' className='nav-link'>Human Skills</Link></button>

      </div>
    </>
  )
}

export default Nav
