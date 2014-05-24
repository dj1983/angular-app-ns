'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.LoginController', [])
  .controller('LoginController', ['$scope', 'User', '$location', '$log', function($scope, User, $location, $log) {
    //User.logout();

    $scope.userData = User.userData;
    $scope.errorMsg = "";
    $scope.User = User;

    $scope.authorize = function() {
      User.authorize().then(function(status) {
        if (status == 'yes') {
          $location.path('/list');
        }
      });
    };

    $scope.login = function() {
      User.login($scope.email, $scope.password, 0);
    };

    $scope.$watch('User.isLogin()', function(newValue, oldValue) {
      if (newValue === true) {
        $location.path('/list');
      }
    });
  }]);
