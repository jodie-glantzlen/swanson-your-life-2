/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favourite_quotes').del()
  await knex('favourite_quotes').insert([
    {id: 1, liked_quotes: 'This is a quote that has been liked'},
    {id: 2, liked_quotes: 'Another liked quote'},
  ]);
};
