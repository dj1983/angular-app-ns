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
  }]);
