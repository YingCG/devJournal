const express = require('express')
const router = express.Router()
const request = require('superagent')

// Server use '/api/v1/home'
router.get('/', (req, res) => {
  db.getTodoList()
    .then(todos => {
      res.json(todos)
      return null
    })
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
  db.addTodo(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      res.sendStatus(500).send(err.message)
    })
})

module.exports = router
