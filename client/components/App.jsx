import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'

import Home from './Home'
import TodoList from './TodoList'
import Projects from './Projects'

function App () {
  return (
    <>
      <Header />

      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/todolist" component={TodoList} />
      </div>
    </>
  )
}

export default App
