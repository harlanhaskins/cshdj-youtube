/*
 * An example song source for CSH DJ. Searches and fetches audio from YouTube.
 */
/*jshint es5: true */

var Q = require('q');

/**
 * This module's logging object.
 */
var log;

/**
 * Name of song source to display in search results.
 */
exports.display_name = 'Youtube';

/**
 * Initialize the song source.
 *
 * @param log Logger object. Call functions debug/info/warn/error to log.
 * @param config Configuration object, which is empty if no configuration is
 *               provided.
 * @return Promise resolving when initialization is complete, and rejecting
 *                 with an Error object if an error has occured.
 */
exports.init = function(_log, config) {
  var deferred = Q.defer();

  log = _log;

  deferred.resolve();
  return deferred.promise;
};

/**
 * Get song result for a search string.
 *
 * @param max_results Maximum number of results to return.
 * @param query String which is a partial match of either title, album, or
 *              artist. This function should match this string to any position
 *              within these properties.
 * @return Promise resolving with an array of result objects, or rejecting
 *                 with an error. If no results were found, resolve with an
 *                 empty array.
 *                 Objects in the results array should have the following:
 *                  id: Unique identifier of the song. This should be whatever
 *                      makes the most sense for your service. It must be
 *                      unique among all songs available in your service.
 *                  title: Title of the song.
 *                  artist: Artist of the song. (optional)
 *                  album: Album of the song. (optional)
 *                  image_url: URL of the album art image. (optional)
 */
exports.search = function(max_results, query) {
  var deferred = Q.defer();
  var results = [];

  for (var i = 0; i < max_results; i++) {
    results.push({
      id: i * 50,
      title: query,
      artist: 'Some Channel (' + (i + 1) + ')',
      album: null,
      image_url: "http://placehold.it/32/b31217/ffffff/&text=" + (i + 1)
    });
  }

  deferred.resolve(results);
  return deferred.promise;
};

/**
 * Fetches the song of the specified id.
 *
 * @param id String of the song's ID to fetch. This is the ID your service
 *           returned in the search results.
 * @param download_location Directory to store the song file in temporarily.
 * @return Promise resolving with full path of the downloaded song file. If
 *         there was an error, the promise is rejected with an Error object.
 */
exports.fetch = function(id, download_location) {
  return Q.reject(new Error('Youtube fetching not implemented yet.'));
};

