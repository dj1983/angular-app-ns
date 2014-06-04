'use strict';


// Declare app level module which depends on filters, and services
angular.module('ToyotaTCheck', [
    'ngRoute',
    /** Services */
    'ToyotaTCheck.services.ItemList',
    'ToyotaTCheck.services.Item',
    'ToyotaTCheck.services.Firebase',
    'ToyotaTCheck.services.User',
    'ToyotaTCheck.services.Util',
    /** Filters */
    'ToyotaTCheck.filters.itemFilter',
    /** Directives */
    'ToyotaTCheck.directives.loadingIndicator',
    'ToyotaTCheck.directives.datepicker',
    /** Controllers */
    'ToyotaTCheck.controllers.ItemListController',
    'ToyotaTCheck.controllers.ItemController',
    'ToyotaTCheck.controllers.LoginController',
    'ToyotaTCheck.controllers.CategoryController',
    'firebase'
  ])
  .config(['ItemListProvider', function(ItemListProvider) {
    ItemListProvider.setBaseUrl('./backend/');
  }])
  .config(['FirebaseServiceProvider', function(FirebaseServiceProvider) {
    FirebaseServiceProvider.setFirebaseUrl('https://tcheck.firebaseio.com');
  }])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ItemListController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);



/***************************************** 
 *            Test cases
 *****************************************/
angular.module('FeatureTest', [
  'ToyotaTCheck.directives.terminal',
  'ToyotaTCheck.directives.scope'
]);
