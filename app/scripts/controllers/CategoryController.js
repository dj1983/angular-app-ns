'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.CategoryController', [])
  .controller('CategoryController', ['$scope', '$window', 'FirebaseService', '$log', function($scope, $window, FirebaseService, $log) {

    $log.log($scope.category);

  }]);
