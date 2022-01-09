
exports.up = function(knex) {
    return knex.schema.createTable('stories', (table) => {
        table.increments('id').primary()
        table.string('title')
        table.string('content')
    })
};

exports.down = function(knex) {
    return knex.schema.createTable('stories')
};
