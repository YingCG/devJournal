import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header () {
  return (
    <>
      <Link to="/"> <img src="/images/IconYing.svg" alt="logo" style={{ width: '70px', height: 'auto' }}/></Link>
      <div className="header-content">
        <h1>WEB DESIGN &amp; DEVELOPE JOURNAL</h1>
        <p className ="TopBottomLine">
          By ying: Some stories &amp; Internet I come across while learning to code.
        </p>
        <Nav />
      </div>
    </>
  )
}

export default Header
