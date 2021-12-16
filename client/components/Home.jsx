import React from 'react'
import { Link } from 'react-router-dom'
import Moods from './Moods'
import SquareList from './SquareList'

const customStyle = {
  color: 'red',
  fontSize: '50px'
}

customStyle.color = 'blueviolet'

function Home () {
  return (
    <>
      <div className='container'>

        <h2 style={customStyle}> </h2>
        <Moods />
        <div className='main'>
          <button className='btn'><Link to='/todolist'>My To do List</Link></button>
          <SquareList />
        </div>
      </div>
    </>
  )
}

export default Home
