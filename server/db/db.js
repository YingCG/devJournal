const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTodoList, addTodo
}

function getTodoList (db = connection) {
  return db('todolists').select()
}

function addTodo (newTodo, db = connection) {
  return db('todolists')
    .insert(newTodo)
}
