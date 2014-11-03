'use strict';

/**
 * @ngdoc overview
 * @name sesameDevicesApp
 * @description
 * # sesameDevicesApp
 *
 * Main module of the application.
 */
angular
  .module('sesameDevicesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sign-out', {
        templateUrl: 'views/sign-out.html',
        controller: 'SignOutCtrl'
      })
      .when('/return', {
        templateUrl: 'views/return.html',
        controller: 'ReturnCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
