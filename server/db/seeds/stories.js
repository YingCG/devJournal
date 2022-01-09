
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'Identity & value', content: ''},
        {id: 2, title: 'Emotional intelligence', content:''},
        {id: 3, title: 'Neuroplasticity', content: ''},
        {id: 4, title: 'Problem Solving with Pseudocode', content: ''}
      ]);
    });
};
