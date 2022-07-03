/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.alterTable('favourite_quotes', function (table) {
    table.renameColumn('liked_quotes', 'quote');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.alterTable('favourite_quotes', function (table) {
    table.renameColumn('quote', 'liked_quotes');
});
}