exports.up = function (knex) {
  return knex.schema.createTable('todoLists', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('status')
  })
}

exports.down = function (knex) {
  return knex.schema.createTable('todoLists')
}
