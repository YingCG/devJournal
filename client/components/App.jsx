import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'

import Home from './Home'
import TodoList from './TodoList'
import Projects from './Projects'
import Stories from './Stories'


function App () {
  return (
    <>
      <Header />

      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/stories" exact component={Stories} />
        <Route path="/todolist" exact component={TodoList} />

      </div>
    </>
  )
}

export default App
