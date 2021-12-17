import React from 'react'
import { Link, Route } from 'react-router-dom'

function SquareList () {
  return (
    <>
      <div className='square-list'>
        <div className='square' id='square1'>
          <button className='btn'><Link to='/todolist'>My To do List</Link></button>
        </div>

        <div className='square' id='square2'>
          <button className='btn'><Link to='/calculator'>My Calculator</Link></button>
        </div>

        <div className='square' id='square3'>
        </div>

        <div className='square' id='square4'>
        </div>

        <div className='square' id='square5'>
        </div>

        <div className='square' id='square6'>
        </div>

        <div className='square' id='square7'>
        </div>

        <div className='square' id='square8'>
        </div>

        <div className='square' id='square9'>
        </div>

        <div className='square' id='square10'>
        </div>

        <div className='square' id='square11'>
        </div>

        <div className='square' id='square12'>
        </div>

        <div className='square' id='square13'>
        </div>

        <div className='square' id='square14'>
        </div>

        <div className='square' id='square15'>
        </div>

        <div className='square' id='square16'>
        </div>

      </div>
    </>
  )
}

export default SquareList
