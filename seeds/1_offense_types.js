'use strict';

const { decamelizeKeys } = require('humps');
const crimeDictionary = require('../test/testdata/crimeDictionary');

exports.seed = function(knex) {
  return knex('offense_types').del()
    .then(() => {
      return knex('offense_types').insert(decamelizeKeys(crimeDictionary))
    });
};
