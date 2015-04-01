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
     $scope.lessons = ["Cardio", "Crossfit", "Barre", "Boxing"];
      $scope.filters = ["LOCATION", "DATE/TIME", "FITNESS TYPES", "FITNESS GOALS", "SKILL LEVEL", "PRICE", "INSTRUCTOR"];
      $scope.items = [
        {desc: "Drop in", price: "$34"}, 
        {desc: "Drop in Sundays", price: "$20"}, 
        {desc: "5 class pack", price: "$149 ($29.80/class)"}, 
        {desc: "10 class pack", price: "$279 ($27.90/class)"}, 
        {desc: "20 class pack", price: "$499 ($24.95/class)"}, 
        {desc: "1 month unlimited", price: "$299"}, 
        {desc: "1 month unlimited*", price: "$149"}, 
        {desc: "Buy one get one", price: "$34"}
      ];
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

    $scope.tooglepopup = function(e, index) {
      $(".classpopup").width($("#classBox").width());
      if ($("#classBox").width() <= "300px") {
        ($(".tabl").width("100%"));
      }
      $(".clp"+index).transition = "core-transition-center";
      $(".clp"+index).toggle();
    }

    $scope.viewmore = function(e, index){
      /*console.log($(e.target).find("h5"));*/
      if ($(e.target).html() == "READ MORE") {
        $("#more"+index).css({
          height: "auto",
          overflow: "auto"
        });
        $(e.target).html("READ LESS");
      }else{
        $("#more"+index).css({
          height: "200px",
          overflow: "hidden"
        });
        $(e.target).html("READ MORE");
      }
    }
  }]);
