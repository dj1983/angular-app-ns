'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemListController', [])
  .controller('ItemListController', ['$scope', 'ItemList', function($scope, ItemList) {
      $scope.categories = ItemList.query();
    }
  ]);
