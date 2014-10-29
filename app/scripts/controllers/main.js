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
      {'name': 'Nexus 5', 'currStatus': 'in'},
      {'name': 'iPhone 4s', 'currStatus': 'out'},
      {'name': 'Samsung Galaxy S4', 'currStatus': 'out'}
    ];

    $scope.orderProp = 'name';
  });
