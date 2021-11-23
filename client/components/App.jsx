import React from 'react'
import { Route } from 'react-router'

import Home from './Home'
import TodoList from './TodoList'

function App () {
  return (
    <>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/todolist" component={TodoList} />
      </div>
    </>
  )
}

export default App
