'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Firebase', [])
  .factory('FirebaseService', ['$firebase', function($firebase) {

    return $firebase(new Firebase("https://tcheckdemo.firebaseio.com/categories"));

  }]);
