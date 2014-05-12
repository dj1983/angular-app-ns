'use strict';


// Declare app level module which depends on filters, and services
angular.module('ToyotaTCheck', [
    /** Services */
    'ToyotaTCheck.services.ItemList',
    'ToyotaTCheck.services.Item',
    /** Filters */
    'ToyotaTCheck.filters.itemFilter',
    /** Directives */
    'ToyotaTCheck.directives.loadingIndicator',
    'ToyotaTCheck.directives.terminal',  // Test
    /** Controllers */
    'ToyotaTCheck.controllers.ItemListController',
    'ToyotaTCheck.controllers.ItemController'
  ])
  .config(function(ItemListProvider) {
    ItemListProvider.setBaseUrl('./backend/');
  });
