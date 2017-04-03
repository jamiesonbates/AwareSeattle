'use strict';

// Dependencies
const knex = require('../knex');
const Mailgun = require('mailgun-js');

// Mailgun
const apiKey = 'key-349865de11233134cfbc2b57c333b0b2';
const domain = 'sandbox2a79e8a13e9b429486e37c1dc03de4d8.mailgun.org';

// Get all alerts + matching user from DB
const getAllAlerts = function() {
  return knex('alerts')
    .select('users.id as userId', 'alerts.id as alertId', 'user_alert_locations.id as locationId', 'offense_types.id as offenseTypeId', 'offense_types.offense_name as offenseName', 'alerts.range as range', 'users.email as email', 'users.username as username', 'user_alert_locations.location_title as location', 'user_alert_locations.location as address', 'user_alert_locations.lat as lat', 'user_alert_locations.lng as lng')
    .innerJoin('users', 'alerts.user_id', 'users.id')
    .innerJoin('user_alert_locations', 'alerts.user_alert_location_id', 'user_alert_locations.id')
    .innerJoin('offense_types', 'offense_types.id', 'alerts.offense_type_id')
}

// For each alert, check whether new data is within the alert's given radius
const checkForMatches = function(alert) {
  console.log('matches api call', alert);
  const promise = new Promise((resolve, reject) => {
    return knex.raw(`
      SELECT *
      FROM police_reports
      WHERE ST_DWithin(police_reports.location, ST_POINT(${parseFloat(alert.lng)}, ${parseFloat(alert.lat)}), ${alert.range}) AND police_reports.new = true AND police_reports.offense_type_id = ${alert.offense_type_id};
    `)
    .then((data) => {
      console.log('api call', data.rows);
      if (data.rows.length) {
        const mergedData = alert;
        mergedData.reports = data.rows;
        resolve(mergedData);
      }

      resolve(false);
    })
    .catch((err) => {
      console.error(err);
    })
  });

  return promise;
}

// Group all alerts by user
const mapMatchesToUsers = function(matches) {
  const matchesByUser = matches.reduce((acc, match) => {
    const userId = match.user_id;

    if (!acc.hasOwnProperty(userId)) {
      acc[userId] = match;
    }
    else {
      acc[userId].reports = acc[userId].reports.concat(match.reports);
    }

    return acc;
  }, {});

  return matchesByUser;
}

// Send alerts that matched with new data
const sendAlertsFromMatches = function(matchesByUser) {
  for (const user in matchesByUser) {

  }
}

// This job will get alerts, find matches, and send alerts
const sendAlertsJob = function() {
  getAllAlerts()
    .then((alerts) => {
      console.log(alerts);
      const res = [];

      for (const alert of alerts) {
        res.push(checkForMatches(alert));
      }

      return Promise.all(res);
    })
    .then((data) => {
      console.log('data', data);
      const matches = [];
      for (const result of data) {
        if (result) {
          matches.push(result);
        }
      }

      return matches;
    })
    .then((matches) => {
      return mapMatchesToUsers(matches);
    })
    .then((matchesByUser) => {
      console.log(matchesByUser);
      for (const user in matchesByUser) {
        console.log(user.reports);
        const mailgun = new Mailgun({ apiKey, domain });

        const data = {
          from: 'jamiesonbates@gmail.com',
          to: 'jamiesonbates@gmail.com',
          subject: 'Does this work?',
          html: `${matchesByUser[user].reports.length} crimes occurred nearby.`
        }

        mailgun.messages().send(data, (err, body) => {
          if (err) {
            console.log('got an error', err);
          }
          else {
            console.log(body);
          }
        })
      }

      return;
    })
    .catch((err) => {
      console.error(err);
    })
}

module.exports = {
  sendAlertsJob,
  getAllAlerts,
  checkForMatches,
  mapMatchesToUsers,
  sendAlertsFromMatches
};
