'use strict';

/* Service */

angular.module('ToyotaTCheck.services.User', [])
  .factory('User', ['FirebaseService', '$q', '$firebase', '$location', '$log', function(FirebaseService, $q, $firebase, $location, $log) {
    var userData = {
        isLogin: false,
        userObjectData: null,
        errorMsg: ''
      },
      auth = new FirebaseSimpleLogin(FirebaseService.ref, function(error, user) {
        var errorMsg = '';

        FirebaseService.resetFbRef();

        if(error) {
          // An error occurred while attempting login
          // Error code: <https://www.firebase.com/docs/security/simple-login-overview.html#Full Error Listing>

          userData.isLogin = false;

          switch(error.code) {
            case 'INVALID_EMAIL':
              userData.errorMsg = 'The specified email address is incorrect.';
              break;
            case 'INVALID_PASSWORD':
              userData.errorMsg = 'The specified password is incorrect.';
              break;
            case 'INVALID_USER':
              userData.errorMsg = 'The specified user does not exist.';
              break;
            default:
              userData.errorMsg = 'Login error.';
              break;
          }

        } else if (user) {
          // User authenticated with Firebase

          userData.isLogin = true;
          userData.userObjectData = user;

        } else {
          // User is logged out

          userData.isLogin = false;
          userData.errorMsg = 'User logout.';
        }
      });

    return {
      isLogin: function() {
        return userData.isLogin;
      },

      authorize: function() {
        var deferred = $q.defer();

        if (this.isLogin()) {
          deferred.resolve('yes');

        } else {
          deferred.resolve('no');
        }

        return deferred.promise;
      },

      login: function(email, password, isRememberMe) {
        if (!userData.isLogin) {
          auth.login('password', {
            'email': email,
            'password': password,
            rememberMe: isRememberMe
          });
        }
      },

      logout: function() {
        auth.logout();
      }
    };
  }]);
