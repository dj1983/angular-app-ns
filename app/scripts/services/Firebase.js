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
        root: root,
        years: $firebase(root.child('data/years')),
        logs: $firebase(root.child('logs')),
        reset: function() {
          this.years = $firebase(root.child('data/years'));
          this.logs = $firebase(root.child('logs'));
        }
      };
    }];

  });
