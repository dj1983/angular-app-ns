'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', ['$scope', '$window', 'Item', 'FirebaseService', '$log', '$q',function($scope, $window, Item, FirebaseService, $log, $q) {

    var tplBaseUrl = './scripts/directives/templates/';

    $scope.templateUrl = tplBaseUrl + 
      ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');
    $scope.originalItem = angular.copy($scope.item);

    // $scope.item.$on('child_changed', function(childSnapshot, prevChildName) {
    //   $log.log(childSnapshot, '   ', prevChildName);
    // });

  }]);
