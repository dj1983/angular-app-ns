'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.LoginController', [])
  .controller('LoginController', ['$scope', 'User', '$location', '$log', function($scope, User, $location, $log) {
    //User.logout();

    $scope.userData = User.userData;
    $scope.errorMsg = "";
    $scope.User = User;
    $scope.loginDisabled = false;

    // Test use
    $scope.email = 'user@fabricgroup.com.au';
    $scope.password = '007';

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

    $scope.$watch('User.isLogin()', function(newValue, oldValue) {
      if (newValue === true) {
        $scope.loginDisabled = false;
        $location.path('/list');
      }
    });
  }]);
