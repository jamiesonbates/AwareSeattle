'use strict';

const alerts = require('../test/testdata/alertsData');

exports.seed = function(knex) {
  return knex('alerts').del()
    .then(() => {
      return knex('alerts').insert(alerts);
    })
    .then(() => {
      return knex.raw("SELECT setval('alerts_id_seq', (SELECT MAX(id) FROM alerts));");
    })
    .catch((err) => {
      console.error(err);
    })
};
