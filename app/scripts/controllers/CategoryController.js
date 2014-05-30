'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.CategoryController', [])
  .controller('CategoryController', [
    '$scope',
    '$q',
    'FirebaseService',
    '$firebase',
    '$window',
    '$log',
    function($scope, $q, FirebaseService, $firebase, $window, $log) {
      $scope.childItems = [];

      $firebase(FirebaseService.root.child('items')).$on('loaded', function(childSnapshot) {
        angular.forEach($scope.category.directItems, function(value, key) {
          $scope.childItems.push(childSnapshot[value]);
        });
        // $log.log('$scope.childItems ', $scope.childItems);
        // function g(item) {
        //   var arr = [];
        //   angular.forEach(ids, function(value) {
        //     arr.push(childSnapshot[value]);
        //   });
        // }
      });

    }
  ]);
