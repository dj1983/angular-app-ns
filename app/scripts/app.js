'use strict';


// Declare app level module which depends on filters, and services
angular.module('ToyotaTCheck', [
    /** Services */
    'ToyotaTCheck.services.ItemList',
    'ToyotaTCheck.services.Item',
    /** Controllers */
    'ToyotaTCheck.controllers.ItemListController',
    'ToyotaTCheck.controllers.ItemController'
  ])
  .config(function(ItemListProvider) {
    ItemListProvider.setBaseUrl('./backend/');
  });
