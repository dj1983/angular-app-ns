'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.CategoryController', [])
  .controller('CategoryController', ['$scope', 'FirebaseService', '$firebase', '$window', '$log',
    function($scope, FirebaseService, $firebase, $window, $log) {

      // "items": ["4", "5", "6", "7", "8", "9", "10"]
      $scope.items = [];

      angular.forEach($scope.category.items, function(value, key) {
        // $log.log(value);
        $scope.items.push($firebase(FirebaseService.root.child('/items/' + value)));
      });

    }
  ]);