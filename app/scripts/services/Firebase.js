'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Firebase', [])
  .factory('FirebaseService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://tcheckdemo.firebaseio.com/categories');

    function resetFbRef() {
      this.fbRef = $firebase(this.ref);
    }

    return {
      ref: ref,
      fbRef: $firebase(ref),
      resetFbRef: resetFbRef
    };

  }]);
