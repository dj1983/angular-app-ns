'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.LoginController', [])
  .controller('LoginController', ['$scope', 'User', '$log', function($scope, User, $log) {
    User.logout();
    $scope.userData = User.userData;
    $scope.login = function() {
      User.login($scope.email, $scope.password, 0)
        .then(function(user) {
          $log.log(user);
        }, function(error) {
          $log.log(error);
        })
        .then(function() {
          $log.log(User.userData);
        });
    };
  }]);
