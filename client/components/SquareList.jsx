import React from 'react'
// import { Link, Route } from 'react-router-dom'
import Square from './Square'
import squareData from '../data/squareList'

function SquareList () {
  return (
    <>
      <div className='square-list'>
        {squareData.squares.map(square => (
          <Square key={square.id} id={square.id} title={square.title} details={square.details}/>
        ))}
      </div>
    </>
  )
}

export default SquareList
