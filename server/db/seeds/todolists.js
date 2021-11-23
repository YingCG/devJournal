exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todolists').del()
    .then(function () {
      // Inserts seed entries
      return knex('todolists').insert([
        { id: 1, name: 'buy onion', status: 'doing' },
        { id: 2, name: 'buy orange', status: 'pending' },
        { id: 3, name: 'something else', status: 'done' }
      ])
    })
}
