'use strict';

/* Controllers */

var sweatnetControllers = angular.module('sweatnetControllers', []);

sweatnetControllers.controller('HomeCtrl', ['$scope', 'Train',
  function($scope, Phone) {
   // $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.myText = "tumadre";
  }]);

/*sweatnetControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);*/
