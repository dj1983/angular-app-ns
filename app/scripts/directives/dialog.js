/* global console */
/* global $ */
'use strict';

/** Directive */

angular.module('ToyotaTCheck.directives.dialog', [])
  .directive('dialog', function() {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {},
      link: function(scope, element, attrs, ngModel) {
        if (!ngModel) return;
        // $("#flagDialog").dialog({
        //   buttons: [{
        //     text: "OK",
        //     click: function() {
        //       $(this).dialog("close");
        //     }
        //   }]
        // });
        // $('#flagDialog').dialog("option", "buttons", [{
        //   text: "save",
        //   click: function() {
        //     $(this).dialog("close");
        //   }
        // }]);
        $(element).on('click', function() {
          console.log(ngModel);
        });
      }
    };
  });
