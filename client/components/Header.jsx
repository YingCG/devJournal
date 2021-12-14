import React from 'react'

function Header () {
  return (
    <div className ="Grid-cell">
      <div className="header-content">
        <a href ="../index.html">
          <img src="/images/IconYing.svg" alt="logo" style={{ width: '70px', height: 'auto' }}/>
        </a>
        <h1>WEB DESIGN &amp; DEVELOPE JOURNAL</h1>
        <p className ="TopBottomLine">
          By ying: Some stories &amp; Internet I come across while learning to code.
        </p>
      </div>
    </div>

  )
}

export default Header
