'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Firebase', [])
  .provider('FirebaseService', function() {
    var firebaseUrl = '';

    this.setFirebaseUrl = function(url) {
      firebaseUrl = url;
    };
    this.$get = ['$firebase', function($firebase) {
      var root = new Firebase(firebaseUrl);

      return {
        root: root
      };
    }];

  });
