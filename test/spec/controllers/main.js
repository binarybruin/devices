'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sesameDevicesApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should create a list of devices to the scope', function () {
    expect(scope.devices.length).toBe(3);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('name');
  });
});
