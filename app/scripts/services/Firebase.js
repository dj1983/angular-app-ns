'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Firebase', [])
  .factory('FirebaseService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://tcheck.firebaseio.com/categories');

    return {
      ref: ref,
      fbRef: $firebase(ref),
      resetFbRef: function() {
        this.fbRef = $firebase(this.ref);
      }
    };

  }]);
