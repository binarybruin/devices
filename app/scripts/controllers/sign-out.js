'use strict';

/**
 * @ngdoc function
 * @name sesameDevicesApp.controller:SignOutCtrl
 * @description
 * # SignOutCtrl
 * Controller of the sign out page for sesameDevicesApp
 */
angular.module('sesameDevicesApp')
  .controller('SignOutCtrl', function ($scope) {
    $scope.sout = [
      {'name': 'Nexus 5', 'platform': 'Android', 'os': 'KitKat', 'currStatus': 'in'},
      {'name': 'iPhone 4s', 'platform': 'iOS', 'os': '5.1', 'currStatus': 'out'},
      {'name': 'Samsung Galaxy S4', 'platform': 'Android', 'os': 'KitKat', 'currStatus': 'out'}
    ];

    $scope.orderProp = 'name';
  });
