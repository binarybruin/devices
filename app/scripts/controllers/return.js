'use strict';

/**
 * @ngdoc function
 * @name sesameDevicesApp.controller:ReturnCtrl
 * @description
 * # ReturnCtrl
 * Controller of the sesameDevicesApp
 */
angular.module('sesameDevicesApp')
  .controller('ReturnCtrl', function ($scope) {
    $scope.deviceLog = function() {
      $scope.devices;
      $scope.users;
    }
  });
