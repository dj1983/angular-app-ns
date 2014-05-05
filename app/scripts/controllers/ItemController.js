'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', ['$scope', 'Item', '$log', function($scope, Item, $log) {

      if ($scope.item.type == 'sub-category') {
        $scope.templateUrl = './scripts/directives/templates/unswipable.html';
      } else {
        $scope.templateUrl = './scripts/directives/templates/swipable.html';
      }

      $scope.doSave = function() {
        Item.edit({
          'id': $scope.item.id,
          'key': 'value',
          'value': $scope.item.value
        });
      };

      // $scope.$watch('item.value', function(newValue, oldValue, $scope) {

      //   if (newValue !== oldValue) {
      //     Item.edit({
      //       'id': $scope.item.id,
      //       'key': 'value',
      //       'value': $scope.item.value
      //     });
      //   }
      // }, true);
    }
  ]);

