import React from 'react'
// import { Link, Route } from 'react-router-dom'
import Square from './Square'
import squareData from '../data/squareList'

function SquareList () {
  return (
    <>
      <div className='square-list'>
        {squareData.colors.map(square => (
          <Square key={square.id} />
        ))}
      </div>
    </>
  )
}

export default SquareList
