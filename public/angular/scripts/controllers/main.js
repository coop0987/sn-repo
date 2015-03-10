'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('sweatnet')
  .controller('MainCtrl', function ($scope, $mdSidenav, $timeout, $q) {
    $scope.iconLoc = "fa fa-times";
    $scope.placeLoc = "in New York, NY";
    $scope.classesList=['All Classes','Barre','Bootcamp','Boxing','Cardio','Crossfit','test input']
    $scope.navToggle=function(){
      $mdSidenav('left').toggle()
    }
    $scope.blocks = [
   		{'title':"Barre","image":"img/a/barre.jpg"},
   		{'title':"Bootcamp","image":"img/a/bootcamp.jpg"},
   		{'title':"Crew","image":"img/a/crew.jpg"},
   		{'title':"Barre","image":"img/a/barre.jpg"},
   		{'title':"Bootcamp","image":"img/a/bootcamp.jpg"},
   		{'title':"Crew","image":"img/a/crew.jpg"}
    ];
    $scope.locChng = function(param){
      if(param)
      {
        $scope.placeLoc = "enter address or zip";
        $scope.iconLoc = "fa fa-location-arrow lightPink";
      }
      else
      {
        $scope.iconLoc = "fa fa-times";
      }
    }
  }).directive('selectMulti', function() {
    return {
      link: function (scope, element) {
        $(element).selectpicker({'title':$(element).attr('placeholder')});
      }
    };
  }).directive('subMenu', function() {
    return {
      link: function (scope, element) {
        $(".selectpicker > li > .subMenu ").on("click",function(e){
          $(".subMenuList").hide();
          $(this).next().toggle();
          e.stopPropagation();
        });
        $(".subMenuList > li").on("click",function(){
          $(".subMenuList").hide();
        })
      }
    };
  }).directive('datePicker', function() {
    return {
      link: function (scope, element) {
        scope.getDatetime = Date.now();
        $(element).datepicker("setValue",scope.getDatetime)
      }
    };
  });

  $(function(){
  
});
