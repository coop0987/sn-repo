'use strict';

/* Filters */

angular.module('sweatnetFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
