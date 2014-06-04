'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Log', [])
  .factory('Log', [
    '$log',
    '$q',
    'User',
    function($log, $q, User) {
      var changeLog = [];

      return {
        /**
         * @param Log {Object}  -  ??
         * @returns {Object}
         */
        add: function(Log) {
          Log = Log || {};
          Log.user = User.getUserObjectData().email;
          changeLog.push(Log);

          return Log;
        },
        get: function() {
          return changeLog;
        }
      };
    }
  ]);
