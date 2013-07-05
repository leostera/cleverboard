'use strict';

describe('Directive: buttonLink', function () {
  beforeEach(angular.mock.module('app'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<button-link></button-link>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the buttonLink directive');
  }));
});
