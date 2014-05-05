'use strict';

/** Directive */

angular.module('ToyotaTCheck.directives.demo', [])
  .directive('demo', function() {

    return {
      restrict: 'E',
      template: '<div>Hello World!</div>',
      replace: 1,
      // compile: function() {
      //   console.log('compile()');
      //   return {
      //     pre: function() {
      //       console.log('pre()');
      //     },
      //     post: function() {
      //       console.log('post()');
      //     }
      //   };
      // },
      link: function() {
        //console.log('link()');
      }
    };
  });
