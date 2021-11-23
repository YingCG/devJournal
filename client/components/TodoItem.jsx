import React from 'react'

function TodoItem (props) {
  return (
    <>
      <p>{props.todo.name}</p>
      {/* <button onClick={handleClick}>delete</button> */}
    </>
  )
}

export default TodoItem
