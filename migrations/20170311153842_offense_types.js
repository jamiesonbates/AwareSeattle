'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('offense_types', (table) => {
    table.increments();
    table
      .string('summarized_offense_type')
      .notNullable();
    table
      .integer('summarized_offense_code')
      .notNullable();
    table
      .string('offense_name')
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.createTable('offense_types');
};
