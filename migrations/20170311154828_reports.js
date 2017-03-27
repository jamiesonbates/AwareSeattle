'use strict';

exports.up = function(knex) {
  return knex.raw(`
    CREATE TABLE police_reports (
      id
        SERIAL
        PRIMARY KEY,
      general_offense_number bigint
        NOT NULL
        UNIQUE,
      offense_type_id integer
        NOT NULL
        REFERENCES offense_types(id)
        ON DELETE CASCADE,
      specific_offense_code integer,
      specific_offense_code_extension integer,
      specific_offense_type varchar(255),
      date_reported timestamp,
      date_occurred timestamp,
      longitude varchar(255),
      latitude varchar(255),
      location geography(POINT, 4326),
      hundred_block varchar(255),
      district_sector varchar(255),
      zone_beat varchar(255),
      new boolean DEFAULT true,
      created_at timestamp,
      updated_at timestamp
    )
  `);
};

exports.down = function(knex) {
  return knex.schema.dropTable('police_reports');
};
