'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Firebase', [])
  .factory('FirebaseService', ['$firebase', function($firebase) {
    var root = new Firebase('https://tcheckdemo.firebaseio.com');

    return {
      root: root
    };

  }]);
