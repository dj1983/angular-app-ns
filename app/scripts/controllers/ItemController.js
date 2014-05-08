'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', ['$scope', 'Item', '$log', function($scope, Item, $log) {

    var tplBaseUrl = './scripts/directives/templates/';

    $scope.templateUrl = tplBaseUrl + 
      ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');
    $scope.originalItem = angular.copy($scope.item);

    $scope.doSave = function() {
      Item.save($scope.item)
        .then(function(response) {
          $scope.originalItem = angular.copy($scope.item);

        }, function(error) {
          $log.log(error + ' Revert!');
          $scope.revert();
        });
    };

    $scope.revert = function() {
      angular.copy($scope.originalItem, $scope.item);
    };

  }]);
