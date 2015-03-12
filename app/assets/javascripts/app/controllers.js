'use strict';

/* Controllers */

var sweatnetControllers = angular.module('sweatnetControllers', []);

sweatnetControllers.controller('HomeCtrl', ['$scope', 'Train',
  function($scope, Phone) {
   // $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.myText = "tumadre";
  }]);

sweatnetControllers.controller('SearchCtrl', ['$scope', '$routeParams', 
  function($scope, $routeParams) {
     $scope.lessons = ["uno", "dos", "tres", "cuatro"];
      $scope.filters = ["LOCATION", "DATE/TIME", "FITNESS TYPES", "FITNESS GOALS", "SKILL LEVEL", "PRICE", "INSTRUCTOR"];
  /*  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });*/

   
    $scope.toggleFilters = function(e) {
      $(".editFilters").toggle();
      $(".editFiltersOpen").toggle();
    }
    $scope.toggle = function(e, index) {
      console.log(index);
      $("#collapse"+index).toggle();
      $(".open"+index).toggle();
      $(".close"+index).toggle();
    }
  }]);
