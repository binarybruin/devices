'use strict';

/**
 * @ngdoc function
 * @name sesameDevicesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sesameDevicesApp
 */
angular.module('sesameDevicesApp')
  .controller('StatusCtrl', function ($scope) {
    $scope.deviceStatus = function() {
      $scope.devices;
    }
  });
