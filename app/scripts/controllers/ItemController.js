'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', ['$scope', 'Item', '$log', '$window', function($scope, Item, $log, $window) {

    var tplBaseUrl = './scripts/directives/templates/';

    $scope.templateUrl = tplBaseUrl + 
      ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');
    $scope.originalItem = angular.copy($scope.item);

    $scope.doSave = function() {
      $scope.loadingOverlay.isShow = 1;
      Item.save($scope.item)
        .then(function(response) {
          $scope.originalItem = angular.copy($scope.item);

        }, function(error) {
          $log.log(error + ' Revert!');
          $scope.revert();
          $window.alert(error + ' Revert!');
        })
        .then(function() {
          $scope.loadingOverlay.isShow = 0;
        });
    };

    $scope.revert = function() {
      angular.copy($scope.originalItem, $scope.item);
    };

  }]);
