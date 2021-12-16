import React from 'react'

function NewTodoForm (props) {
  props.state = { task: '' }
  return (
    <>
      <p>{props.todo.name}</p>
      <button onClick>Edit</button>
      <button onClick>X</button>
    </>
  )
}

export default NewTodoForm
