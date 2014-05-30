'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemListController', [])
  .controller('ItemListController', ['$scope', 'FirebaseService', '$firebase', 'User', '$location', '$log',
    function($scope, FirebaseService, $firebase, User, $location, $log) {
      $scope.categories = $firebase(FirebaseService.root.child('categories'));
      $scope.items = $firebase(FirebaseService.root.child('items'));
      $scope.itemStatus = 'all';
      $scope.loadingOverlay = {
        isShow: 0
      };
      $scope.options = [{
        label: 'All items',
        value: 'all'
      }, {
        label: 'Flaged items',
        value: 'flag'
      }, {
        label: 'N/A items',
        value: 'na'
      }];

      $scope.filterAll = function() {
        $scope.itemStatus = 'all';
      };

      $scope.filterFlag = function() {
        $scope.itemStatus = 'flag';
      };

      $scope.filterNA = function() {
        $scope.itemStatus = 'na';
      };

      $scope.isGuest = true;

      $scope.authorize = function() {
        if (User.isLogin()) {
          $scope.email = User.getUserObjectData().email;
          $scope.isGuest = ($scope.email === 'guest@fabricgroup.com.au');
        } else {
          $location.path('/login');
        }
      };

      $scope.logout = function() {
        User.logout();
      };

      $scope.$watch(function() {
        return User.isLogin();
      }, function(newValue, oldValue) {
        if (newValue === false) {
          $location.path('/login');
        }
      });

      $scope.items.$on('child_changed', function(childSnapshot) {
        // $log.log(key, ' here');
      });
    }
  ]);