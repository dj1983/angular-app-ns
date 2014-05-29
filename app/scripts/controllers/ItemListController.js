'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemListController', [])
  .controller('ItemListController', ['$scope', 'FirebaseService', 'User', '$location','$log', function($scope, FirebaseService, User, $location, $log) {
    $scope.categories = FirebaseService.fbRef;
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

    $scope.doSave = function() {
      $scope.loadingOverlay.isShow = 1;
      $scope.categories.$save()
        .then(function(ref) {
          $scope.loadingOverlay.isShow = 0;
          $log.log(ref);
        }, function(err) {
          $scope.loadingOverlay.isShow = 0;
          $log.log(err);
        });
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

    $scope.$watch(function() { return User.isLogin(); }, function(newValue, oldValue) {
      if (newValue === false) {
        $location.path('/login');
      }
    });

    $scope.categories.$on('child_changed', function(childSnapshot, prevChildName) {
      $log.log(childSnapshot, '   ', prevChildName);
    });

  }]);
