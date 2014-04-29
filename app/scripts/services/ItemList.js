'use strict';

/* Service */

angular.module('ToyotaTCheck.services.ItemList', [])
  .provider('ItemList', function() {

      var baseUrl = './';

      this.setBaseUrl = function setBaseUrl(url) {
        baseUrl = url;
      };

      this.$get = ['$http', '$q', '$log', function($http, $q, $log) {

        return {
          query: function() {
            var checklists = [];

            $http
              .get(baseUrl + 'checklist.json')
              .success(function(data, status) {
                angular.forEach(data, function(item) {
                  checklists.push(item);
                });
              })
              .error(function() {
                $log.log('ERROR');
              });

            return checklists;
          }
        };
      }];
    });