'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemListController', [])
  .controller('ItemListController', ['$scope', 'FirebaseService', 'User', '$location','$log', function($scope, FirebaseService, User, $location, $log) {
    $scope.categories = FirebaseService.fbRef;
    $scope.User = User;
    $scope.itemStatus = 'all';
    $scope.loadingOverlay = {
      isShow: 0
    };

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

    $scope.authorize = function() {
      User.authorize().then(function(status) {
        if (status == 'no') {
          $location.path('/login');
        }
      });
    };

    $scope.logout = function() {
      User.logout();
    };

    $scope.$watch('User.isLogin()', function(newValue, oldValue) {
      if (newValue === false) {
        $location.path('/login');
      }
    });
  }]);
