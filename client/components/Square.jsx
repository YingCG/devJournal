import React from 'react'

function Square (props) {
  return (
    <div className='square' id={`square${props.id}`}>
      <h3>title={props.title} </h3>
      <p> details={props.details} </p>
    </div>
  )
}

export default Square
