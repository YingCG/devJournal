import request from 'superagent'

const serverURL = '/api/v1/todos'

export function getTodoList () {
  return request
    .get(serverURL)
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(err => {
      console.error('ERROR:', err.message)
    })
}

export function addTodo (newTodo) {
  return request.post(serverURL)
    .post(serverURL)
    .send(newTodo)
}
