'use strict';

/** Directive */

angular.module('ToyotaTCheck.directives.loadingIndicator', [])
  .directive('loadingIndicator', function() {

    return {
      restrict: 'EA',
      template: '<div ng-class="{ loading: 1, show: loading.isShow }">Loading...</div>',
      replace: 1,
      link: function(scope, iElement, iAttrs) {

      }
    };
  });
