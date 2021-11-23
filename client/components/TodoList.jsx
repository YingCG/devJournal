import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TodoItem from './TodoItem'
import { getTodoList } from '../api/api'

function TodoList () {
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    getTodoList()
      .then(todolist => {
        console.log(todolist)
        setTodoList(todolist)
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  function handleChange (event) {
    const newTodo = event.target.value
    setInput(newTodo)
  }

  function handleClick () {
    setTodoList((TodoList) => {
      return [...TodoList, todoList]
    })
  }

  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <div className="main">
          <h2>My To-do List</h2>
          <form>
            <input
              onChange={handleChange}
              type="text"
              name="Todo"
              value={input}
            />
            <button onClick={handleClick}>Add To-do</button>
          </form>
          <div>
            <ul>
              {todoList.map((todoItem) => {
                return <li key={todoItem.id}><TodoItem todo={todoItem} /> </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList
