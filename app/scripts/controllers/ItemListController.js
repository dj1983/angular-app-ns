'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemListController', [])
  .controller('ItemListController', ['$scope', 'ItemList', '$log', function($scope, ItemList, $log) {
    $scope.categories = ItemList.query();
    $scope.itemStatus = 'all';
    $scope.loadingOverlay = {
      isShow: 0
    };

    $scope.filterAll = function() {
      $scope.itemStatus = 'all';
    };

    $scope.filterFlag = function() {
      $scope.itemStatus = 'flag';
    };

    $scope.filterNA = function() {
      $scope.itemStatus = 'na';
    };

    $scope.itemFilter = function() {
      var isPassed = function isPassed(item) {
        var len = 0;

        if (item.status == $scope.itemStatus) {
          return true;

        } else if (item.items) {
          len = item.items.length;

          for(var i = 0; i < len; i++) {

            if (isPassed(item.items[i])) {
              return true;
            }
          }

        } else {
          return false;
        }
      };

      return function(item) {
        if ($scope.itemStatus == 'all') { return true; }

        return isPassed(item);
      };

    };
  }]);
