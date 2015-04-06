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
      $scope.dates = [
        {date: "Mon Feb 10", time: "4:00pm", instr: "Susan"},
        {date: "Tue Feb 11", time: "4:00pm", instr: "Susan"},
        {date: "Fri Feb 14", time: "4:00pm", instr: "Mark"},
        {date: "Sun Feb 16", time: "2:00pm", instr: "Victor"},
        {date: "Mon Feb 10", time: "4:00pm", instr: "Susan"},
        {date: "Tue Feb 11", time: "4:00pm", instr: "Susan"},
        {date: "Fri Feb 14", time: "4:00pm", instr: "Mark"},
      ]
      angular.element($window).bind('orientationchange', function () {
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
      /*$(".classpopup").width($("#classBox").width());
      if ($("#classBox").width() <= "300px") {
        ($(".tabl").width("100%"));
      }*/
      $(".classpopup").toggle();
      $scope.selectedlesson = $scope.lessons[index];
    }

    $scope.viewmore = function(e, index){
      if ($("#aboutread").children(0).html() == "READ MORE") {
        $("#more").css({
          height: "auto",
          overflow: "auto"
        });
        $("#aboutread").children(0).html("READ LESS");
      }else{
        $("#more").css({
          height: "245px",
          overflow: "hidden"
        });
        $("#aboutread").children(0).html("READ MORE");
      }
    }
  }]);
