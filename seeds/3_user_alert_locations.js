'use strict';

const locations = require('../test/testdata/userAlertLocations.js');

exports.seed = function(knex) {
  return knex('user_alert_locations').del()
    .then(() => {
      return knex('user_alert_locations').insert(locations);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_alert_locations_id_seq', (SELECT MAX(id) FROM user_alert_locations));");
    })
    .catch((err) => {
      console.error(err);
    })
};
