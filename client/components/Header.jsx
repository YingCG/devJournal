import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header () {
  return (
    <>
    <div className='Grid-cell'>
    <div className="header">
      <Link to="/"> <img src="/images/YingCG.svg" alt="logo" style={{ width: '70px', height: 'auto' }}/></Link>
      <div className="header-content">
        <h1>WEB DESIGN &amp; DEVELOPE JOURNAL</h1>
        <h4 className ="TopBottomLine">
          By ying: Some stories &amp; Internet I come across while learning to code.
        </h4>
      </div>
      </div>
      <Nav />
      </div>
    </>
  )
}

export default Header
