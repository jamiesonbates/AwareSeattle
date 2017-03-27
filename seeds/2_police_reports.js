'use strict';

exports.seed = function(knex) {
  return knex('police_reports').del()
    .then(() => {
      return knex.raw(`
        INSERT INTO police_reports (
          id,
          date_reported,
          district_sector,
          general_offense_number,
          hundred_block,
          longitude,
          latitude,
          location,
          date_occurred,
          specific_offense_code,
          specific_offense_code_extension,
          specific_offense_type,
          offense_type_id,
          zone_beat,
          new
        )
        VALUES
          (1, '2017-03-01T11:25:00.000', 'W', 201773977, '44 AV SW / SW ADMIRAL WY', -122.387863159, 47.581176758, ST_GeographyFromText('SRID=4326;POINT(-122.387863159 47.581176758)'), '2017-02-28T21:00:00.000', 2404, 1, 'VEH-THEFT-AUTO', 1, 'W1', true),
          (2, '2017-03-01T17:33:00.000', 'F', 201774471, '35 AV SW / SW THISTLE ST', -122.387863159, 47.581176758, ST_GeographyFromText('SRID=4326;POINT(-122.387863159 47.581176758)'), '2017-03-01T06:40:00.000', 2404, 1, 'VEH-THEFT-AUTO', 1, 'F2', true),
          (3, '2017-03-01T16:30:00.000', 'C', 201774389, 'E OLIVE ST / 13 AV', -122.315567017, 47.616439819, ST_GeographyFromText('SRID=4326;POINT(-122.315567017 47.616439819)'), '2017-02-26T11:00:00.000', 2404, 1, 'VEH-THEFT-AUTO', 1, 'C1', false),
          (4, '2017-03-02T05:44:00.000', 'K', 201774968, '3 AV / COLUMBIA ST', -122.332717896, 47.604198456, ST_GeographyFromText('SRID=4326;POINT(-122.332717896 47.604198456)'), '2017-03-02T05:44:00.000', 1305, 0, 'ASSLT-AGG-WEAPON', 3, 'K1', false),
          (5, '2017-03-02T10:16:00.000', 'M', 201775226, '5XX BLOCK OF PIKE ST', -122.335014343, 47.610908508, ST_GeographyFromText('SRID=4326;POINT(-122.335014343 47.610908508)'), '2017-03-02T10:16:00.000', 1313, 2, 'ASSLT-NONAGG-POLICE', 3, 'M3',
          false),
          (6, '2017-03-02T20:04:00.000', 'M', 201775992, '3XX BLOCK OF PINE ST', -122.338150024, 47.610973358, ST_GeographyFromText('SRID=4326;POINT(-122.338150024 47.610973358)'), '2017-03-02T20:04:00.000', 2203, 0, 'BURGLARY-FORCE-NONRES', 5, 'M2', false),
          (7, '2017-03-03T02:26:00.000', 'J', 201776304, 'AURORA AV N / WINONA AV N', -122.326560, 47.617756, ST_GeographyFromText('SRID=4326;POINT(-122.326560 47.617756)'), '2017-03-03T02:26:00.000', 3542, 1, 'NARC-POSSESS-METH', 4, 'J3', true),
          (8, '2017-03-02T23:02:00.000', 'F', 201776063, '28XX BLOCK OF SW BARTON ST', -122.326560, 47.617756, ST_GeographyFromText('SRID=4326;POINT(-122.326560 47.617756)'), '2017-03-02T21:16:00.000', 2303, 0, 'THEFT-SHOPLIFT', 11, 'F2', true),
          (9, '2017-03-01T12:51:00.000', 'M', 201790185 , '5XX BLOCK OF OLIVE WY', -122.33683776, 47.61289596, ST_GeographyFromText('SRID=4326;POINT(-122.33683776 47.61289596)'), '2017-03-01T10:00:00.000', 299 , 0, 'PROPERTY DAMAGE - GRAFFITI', 7, 'M2', false),
          (10, '2017-02-01T15:42:00.000', 'E', 201739375, '9 AV / MADISON ST', -122.327362061, 47.608406067, ST_GeographyFromText('SRID=4326;POINT(-122.327362061 47.608406067)'), '2017-02-01T15:42:00.000', 2305, 0, 'THEFT-CARPROWL', 10, 'E3', true),
          (11, '2016-02-01T15:42:00.000', 'E', 201739380, '9 AV / MADISON ST', -100.327362061, 30.608406067, ST_GeographyFromText('SRID=4326;POINT(-100.327362061 30.608406067)'), '2016-02-01T15:42:00.000', 2305, 0, 'THEFT-CARPROWL', 10, 'E3', true)
      `);
    })
    .then(() => {
      return knex.raw("SELECT setval('police_reports_id_seq', (SELECT MAX(id) FROM police_reports));");
    })
    .catch((err) => {
      console.error(err);
    })
};
