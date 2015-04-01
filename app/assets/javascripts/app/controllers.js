'use strict';

/* Controllers */

var sweatnetControllers = angular.module('sweatnetControllers', []);

sweatnetControllers.controller('HomeCtrl', ['$scope', 'Train',
  function($scope, Phone) {
   // $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.myText = "tumadre";
  }]);

sweatnetControllers.controller('SearchCtrl', ['$window','$scope', '$routeParams', 
  function($window, $scope, $routeParams) {
     $scope.lessons = ["uno", "dos", "tres", "cuatro"];
      $scope.filters = ["LOCATION", "DATE/TIME", "FITNESS TYPES", "FITNESS GOALS", "SKILL LEVEL", "PRICE", "INSTRUCTOR"];
      $scope.items = ["$1", "$2", "$4", "$8", "$16"];
      angular.element($window).bind('orientationchange', function () {
        //alert("change");
        if($("#classBox").length>0){
          $("#classBox").removeAttr( "style" );
        }
      });
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

    $scope.tooglepopup = function(e) {
      $(".classpopup").transition = "core-transition-center";
      $(".classpopup").toggle();
    }
  }]);
