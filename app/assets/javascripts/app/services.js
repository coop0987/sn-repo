'use strict';

/* Services */

var sweatnetServices = angular.module('sweatnetServices', ['ngResource']);

sweatnetServices.factory('Train', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
