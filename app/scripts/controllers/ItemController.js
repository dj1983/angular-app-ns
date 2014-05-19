'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', ['$scope', '$window', 'Item', 'FirebaseService', '$log', '$q',function($scope, $window, Item, FirebaseService, $log, $q) {

    var tplBaseUrl = './scripts/directives/templates/';

    $scope.templateUrl = tplBaseUrl + 
      ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');
    $scope.originalItem = angular.copy($scope.item);

    // $scope.doSave = function() {
    //   $scope.categories.$save()
    // };

    // $scope.revert = function() {
    //   angular.copy($scope.originalItem, $scope.item);
    // };

  }]);
