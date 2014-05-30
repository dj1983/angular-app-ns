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
      // directItems: ["4"]
      // $scope.item = {
      //   "id": "4",
      //   "category": "2",
      //   "title": "Exterior features-4",
      //   "type": "sub-category",
      //   "status": "",
      //   "children": ["5", "6", "7"]
      // }
      $log.log('item ', $scope.item);

      var tplBaseUrl = './scripts/directives/templates/';

      $scope.templateUrl = tplBaseUrl +
        ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');

      $scope.childItems = [];

      $firebase(FirebaseService.root.child('items')).$on('loaded', function(childSnapshot) {
        angular.forEach($scope.item.children, function(value, key) {
          $scope.childItems.push(childSnapshot[value]);
        });
        $log.log('$scope.childItems ', $scope.childItems);
      });

      // https://tcheck.firebaseio.com/items/1
      $scope.item = $firebase(FirebaseService.root.child('/items/' + $scope.item.id));

      // $scope.isSaveBtnDisabled = true;


      // $scope.item.$on('change', function(key) {
      //   $log.log('ItemController :: ', key, ' :: changed');
      // });

      // $scope.saveItemValue = function() {
      //   $scope.isSaveBtnDisabled = true;
      //   $scope.item.$save()
      //     .then(function() {
      //       $scope.isSaveBtnDisabled = false;
      //     });
      // };

    }
  ]);
