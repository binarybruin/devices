'use strict';

/**
 * @ngdoc function
 * @name sesameDevicesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sesameDevicesApp
 */
angular.module('sesameDevicesApp')
  .controller('LogCtrl', function ($scope) {
    $scope.deviceLog = function() {
      $scope.devices;
      $scope.users;
    }
  });
