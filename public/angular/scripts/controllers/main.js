'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('sweatnet')
  .controller('MainCtrl', function ($scope, $mdSidenav, $timeout, $q, $log) {
    $scope.iconLoc = "fa fa-times";
    $scope.placeLoc = "in New York, NY";
    $scope.classesList=['All Classes','Barre','Bootcamp','Boxing','Cardio','Crossfit','test input'];
    $scope.timeData = "this evening";
    $scope.changeDate = function(type,data,time){
      if(time){
        $scope.timeData =  $("#okSet").attr('date') +" "+data;
      }
      else{
        $scope.timeData = type+" "+data;
      }
    }
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
    $scope.isLocTyp = false;
    function loadAll() {
      var allStates = 'New York, New Jersey, Texas, Washington, Massachusetts';
      return allStates.split(/, +/g).map( function (state) {
        return state
      });
    }
    $scope.states = loadAll();
  }).directive('selectMulti', function() {
    return {
      link: function (scope, element) {
        $(element).selectpicker({'title':$(element).attr('placeholder')});
        $("body").click(function(){
          setTimeout(function(){
          if($("#dropperClass").hasClass("open"))
            $("#dropClasses").removeClass('fa-caret-down').addClass('fa-caret-up')
          else
            $("#dropClasses").addClass('fa-caret-down').removeClass('fa-caret-up')
          },500)
        })
      }
    };
  }).directive('zoomMouse', function() {
    return {
      link: function (scope, element) {
        $(element).mouseover(function()
         {
            //$(element).css("cursor","pointer");
         });
         $(element).mouseout(function()
          {   
             //$(element).animate({width: $(element).width()}, 'slow');
         });
      }
    };
  }).directive('subMenu', function() {
    return {
      link: function (scope, element) {
        $("body").click(function(){
          setTimeout(function(){
          if($(element).hasClass("open"))
            $("#dropTimeDate").removeClass('fa-caret-down').addClass('fa-caret-up')
          else
            $("#dropTimeDate").addClass('fa-caret-down').removeClass('fa-caret-up')
          },500)
        })
        $(".selectpicker > li > .subMenu ").on("click",function(e){
          $(".subMenuList").hide();
          if($(this).attr('id')!= "classSelect4")
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
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
        var dateGot = new Date().toLocaleDateString();
        var dateElem = $(element).datepicker({
          onRender: function(date) {
            // if(date.valueOf() < now.valueOf())
            //   return 'disabled'
            if(date.valueOf() == now.valueOf())
              return 'red'
            // else
            //   return ''
          }
        }).on('changeDate', function(ev) {
          dateGot = new Date(ev.date.valueOf()).toLocaleDateString();
          $("#okSet").attr('date',dateGot)
        }).data('datepicker')
        $("#dateSelect").hide();
      }
    };
  });

var changeDate = function(){
   $("#changedDate").html($("#okSet").attr('date'));
   $(".datepicker").hide();
   $("#dateSelect").show();
}
var cancelSet = function(){
  $("#changedDate").html("More Dates")
  $(".datepicker").hide();
}

