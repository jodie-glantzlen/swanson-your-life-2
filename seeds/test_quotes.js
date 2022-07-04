/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('liked_quotes').del()
  await knex('liked_quotes').insert([
    {id: 1, quote: 'Test quote!'},
    {id: 2, quote: 'Another test quote!'},
  ]);
};
