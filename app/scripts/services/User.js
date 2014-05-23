'use strict';

/* Service */

angular.module('ToyotaTCheck.services.User', [])
  .factory('User', ['FirebaseService', '$q', '$log', function(FirebaseService, $q, $log) {
    var userData = {
        'isLogin': false
      },
      deferred = $q.defer(),
      auth = new FirebaseSimpleLogin(FirebaseService.ref, function(error, user) {
        if(error) {
          deferred.reject($q.reject(error));
        } else if (user) {
          userData.isLogin = true;
          $log.log('here');
          $log.log(user);
          deferred.resolve(user);
        }
      });

    return {
      'userData': userData,
      'login': function(email, password, isRememberMe) {
        if (!userData.isLogin) {
          auth.login('password', {
            'email': email,
            'password': password,
            rememberMe: isRememberMe
          });
        }

        return deferred.promise;
      },
      'logout': function() {
        auth.logout();
      }
    };
  }]);
