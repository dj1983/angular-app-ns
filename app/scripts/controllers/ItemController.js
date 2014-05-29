'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', [
    '$scope',
    '$window',
    'Item',
    'FirebaseService',
    '$firebase',
    '$q',
    '$log',
    function($scope, $window, Item, FirebaseService, $firebase, $q, $log) {

      var tplBaseUrl = './scripts/directives/templates/';
      $log.log($scope.item);

      $scope.templateUrl = tplBaseUrl +
        ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');
      // $scope.originalItem = angular.copy($scope.item);

      // $scope.item.$on('child_changed', function(childSnapshot, prevChildName) {
      //   $log.log(childSnapshot, '   ', prevChildName);
      // });

      // $scope.item.items = [];

      // $scope.item is '/items/1'
      // $log.log('item: ', $scope.item);
      // $log.log($scope.item.children);
      $scope.items = [];

      if ($scope.item.children && $scope.item.children.length > 0) {
        angular.forEach($scope.item.children, function(value, key) {
          $scope.items.push($firebase(FirebaseService.root.child('/items/' + value)));
        });
      }
      // $log.log('item: ', $scope.item);
      

    }
  ]);