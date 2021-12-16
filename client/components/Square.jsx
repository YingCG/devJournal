import React from 'react'

function Square (props) {
  return (
    <div className='square' id={`square${props.id}`}>
      <h3>{props.title} </h3>
      <p> {props.details.replace('\n', '<br />')} </p>
    </div>
  )
}

export default Square
