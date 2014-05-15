/* global console */
'use strict';

/** Directive */

/**
 * Test 'scope' prop
 */

angular.module('ToyotaTCheck.directives.scope', [])
  .directive('childScope', function($rootScope) {
    return {
      scope: {
        text: '@myAttr'
      },
      template: '<div>From custom directive: <em>{{text}}</em></div>',
      link: function(scope, element, attrs) {
        // scope.theScope = 'Child scope';
        // console.log(scope === $rootScope);
        // console.log(scope.foo);
      }
    };
  });
