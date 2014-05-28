'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.LoginController', [])
  .controller('LoginController', ['$scope', 'User', '$location', '$log', function($scope, User, $location, $log) {
    //User.logout();

    $scope.errorMsg = '';
    $scope.loginDisabled = false;

    // Test use
    $scope.email = 'user@fabricgroup.com.au';
    $scope.password = 'user';

    $scope.authorize = function() {
      User.authorize().then(function(status) {
        if (status == 'yes') {
          $location.path('/list');
        }
      });
    };

    $scope.login = function() {
      $scope.loginDisabled = true;
      User.login($scope.email, $scope.password, 0);
    };

    $scope.$watch(function() { return User.isLogin(); }, function(newValue, oldValue) {
      if (newValue === true) {
        $scope.loginDisabled = false;
        $scope.errorMsg = '';
        $location.path('/list');
      }
    });

    $scope.$watch(function() { return User.getErrorMsg(); }, function(newValue, oldValue) {
      $scope.errorMsg = newValue;
      $scope.loginDisabled = false;
    });

  }]);
