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
  const promise = new Promise((resolve, reject) => {
    return knex.raw(`
      SELECT *
      FROM police_reports
      WHERE ST_DWithin(police_reports.location, ST_POINT(${parseFloat(alert.lng)}, ${parseFloat(alert.lat)}), ${alert.range}) AND police_reports.new = true AND police_reports.offense_type_id = ${alert.offenseTypeId};
    `)
    .then((data) => {
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
const mapMatchesToUsersByLocation = function(matches) {
  console.log('matches', matches);
  const matchesByUser = matches.reduce((acc, match) => {
    const currentUserId = match.userId;
    const currentLocationId = match.locationId;
    const currentOffenseTypeId = match.offenseTypeId;
    const user = {
      userId: match.userId,
      email: match.email,
      username: match.username
    };
    const location = {
      locationId: match.locationId,
      name: match.location,
      address: match.address,
      lat: match.lat,
      lng: match.lng
    };
    const alert = {
      offenseTypeId: match.offenseTypeId,
      offenseName: match.offenseName,
      range: match.range,
      reports: match.reports
    }

    if (!acc.hasOwnProperty(currentUserId)) {
      acc[currentUserId] = user;

      if (!acc[currentUserId].hasOwnProperty(currentLocationId)) {
        acc[currentUserId][currentLocationId] = location;
        acc[currentUserId][currentLocationId][currentOffenseTypeId] = alert;
      }
      else {
        if (!acc[currentUserId][currentLocationId].hasOwnProperty(currentOffenseTypeId)) {
          acc[currentUserId][currentLocationId][currentOffenseTypeId] = alert;
        }
        else {
          acc[currentUserId][currentLocationId][currentOffenseTypeId].reports = acc[currentUserId][currentLocationId][currentOffenseTypeId].reports.concat(alert.reports);
        }
      }
    }
    else {
      if (!acc[currentUserId].hasOwnProperty(currentLocationId)) {
        acc[currentUserId][currentLocationId] = location;
        acc[currentUserId][currentLocationId][currentOffenseTypeId] = alert;
      }
      else {
        if (!acc[currentUserId][currentLocationId].hasOwnProperty(currentOffenseTypeId)) {
          acc[currentUserId][currentLocationId][currentOffenseTypeId] = alert;
        }
        else {
          acc[currentUserId][currentLocationId][currentOffenseTypeId].reports = acc[currentUserId][currentLocationId][currentOffenseTypeId].reports.concat(alert.reports);
        }
      }
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

const updateReportsAsOld = function() {
  return knex('police_reports').where('new', '=', true).update({
    new: false
  })
  .catch((err) => {
    console.error(err);
  });
}

// This job will get alerts, find matches, and send alerts
const sendAlertsJob = function() {
  getAllAlerts()
    .then((alerts) => {
      const res = [];

      for (const alert of alerts) {
        res.push(checkForMatches(alert));
      }

      return Promise.all(res);
    })
    .then((data) => {
      const matches = [];
      for (const result of data) {
        if (result) {
          matches.push(result);
        }
      }

      return matches;
    })
    .then((matches) => {
      return mapMatchesToUsersByLocation(matches);
    })
    .then((matchesByUser) => {
      console.log('matchesByUser', matchesByUser);
      for (const user in matchesByUser) {
        let emailDiv = '<div>';
        const emailDivEnd = '</div>';
        console.log(user);
        console.log(matchesByUser[user]);
        const currentUser = matchesByUser[user];

        for (const location in currentUser) {
          if (parseInt(location) >= 0) {
            const locationName = currentUser[location].name;
            const locationAddress = currentUser[location].address;
            let locationDiv = `<div><h3>Here is a breakdown of incident reports nearby ${locationAddress}</h3>`;
            const locationDivEnd = '</div>';
            const locationLat = currentUser[location].lat;
            const locationLng = currentUser[location].lng;
            const currentLocation = currentUser[location];

            for (const offense in currentLocation) {
              if (parseInt(offense) >= 0) {
                console.log('offense', offense);
                console.log(currentLocation[offense]);
                console.log('reports', currentLocation[offense].reports);
                const offenseName = currentLocation[offense].offenseName;
                console.log('offenseName', offenseName);
                const reports = currentLocation[offense].reports;
                let offenseCount;

                if (reports === undefined) {
                  offenseCount = 0;
                }
                else {
                  offenseCount = reports.length;
                }
                console.log('offenseCount', offenseCount);
                const alertRange = currentLocation[offense].range;
                const offenseTypeId = currentLocation[offense].offenseTypeId;
                const offenseDiv =
                  `<div>
                    <p>A ${offenseName} incident occured ${offenseCount} times near '${locationName}' recently.<span><a href="https://crime-watch-seattle.herokuapp.com/reports/${parseFloat(locationLat)}/${parseFloat(locationLng)}/${parseInt(alertRange)}/${parseInt(offenseTypeId)}">See list</a></span></p>
                  </div>`;
                locationDiv = locationDiv + offenseDiv;
              }
            }
            locationDiv = locationDiv + locationDivEnd;
            emailDiv = emailDiv + locationDiv;
          }
        }

        emailDiv = emailDiv + emailDivEnd;
        const mailgun = new Mailgun({ apiKey, domain });

        const data = {
          from: 'jamiesonbates@gmail.com',
          to: 'jamiesonbates@gmail.com',
          subject: 'New Crimes Were Reported Near You',
          html: emailDiv
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

      updateReportsAsOld();

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
  mapMatchesToUsersByLocation,
  sendAlertsFromMatches
};
