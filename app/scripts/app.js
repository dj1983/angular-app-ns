'use strict';


// Declare app level module which depends on filters, and services
angular.module('ToyotaTCheck', [
    'ngRoute',
    /** Services */
    'ToyotaTCheck.services.ItemList',
    'ToyotaTCheck.services.Item',
    'ToyotaTCheck.services.Firebase',
    'ToyotaTCheck.services.User',
    /** Filters */
    'ToyotaTCheck.filters.itemFilter',
    /** Directives */
    'ToyotaTCheck.directives.loadingIndicator',
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
