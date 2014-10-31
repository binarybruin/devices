'use strict';

/**
 * @ngdoc function
 * @name sesameDevicesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sesameDevicesApp
 */
angular.module('sesameDevicesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.devices = [
      {'name': 'Nexus 5', 'platform': 'Android', 'os': 'KitKat', 'currStatus': 'in'},
      {'name': 'iPhone 4s', 'platform': 'iOS', 'os': '5.1', 'currStatus': 'out'},
      {'name': 'Samsung Galaxy S4', 'platform': 'Android', 'os': 'KitKat', 'currStatus': 'out'}
    ];

    $scope.orderProp = 'name';
  });
