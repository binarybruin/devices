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
      {'name': 'iPhone 4s'},
      {'name': 'Nexus 5'},
      {'name': 'Samsung Galaxy S4'}
    ];
  });