'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemListController', [])
  .controller('ItemListController', ['$scope', 'FirebaseService', function($scope, FirebaseService) {
    $scope.categories = FirebaseService;
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

    $scope.doSave = function() {
      $scope.categories.$save();
    };

  }]);
