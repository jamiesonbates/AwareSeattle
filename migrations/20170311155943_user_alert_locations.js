'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_alert_locations', (table) => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index()
    table.string('location_title')
    table.string('location')
    table.string('lat')
    table.string('lng')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_alert_locations');
};
