"use strict";angular.module("sweatnet",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("sweatnet").controller("MainCtrl",["$scope",function(a){a.blocks=[{title:"Barre",image:"img/a/barre.jpg"},{title:"Bootcamp",image:"img/a/bootcamp.jpg"},{title:"Crew",image:"img/a/crew.jpg"},{title:"Barre",image:"img/a/barre.jpg"},{title:"Bootcamp",image:"img/a/bootcamp.jpg"},{title:"Crew",image:"img/a/crew.jpg"}]}]);