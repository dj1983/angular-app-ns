'use strict';

/* Service */

angular.module('ToyotaTCheck.services.ItemList', [])
  .provider('ItemList', function() {

      var baseUrl = './';

      this.setBaseUrl = function setBaseUrl(url) {
        baseUrl = url;
      };

      this.$get = ['$http', '$log', function($http, $log) {

        return {
          query: function() {
            var checklists = [];

            $http.get(baseUrl + 'checklist.json')
              // .success(function(data, status) {
              //   angular.forEach(data, function(item) {
              //     checklists.push(item);
              //   });
              // })
              // .error(function() {
              //   $log.log('ERROR');
              // });
              .then(function(data) {
                $log.log(111111);
                $log.log(data);
                // data = data.data;
                // angular.forEach(data, function(item) {
                //   checklists.push(item);
                // });
                //return $http.get(baseUrl + 'temp.json');
                return this;
              }).then(function(data) {
                $log.log(222222);
                $log.log(data);
              });

            return checklists;
          }
        };

      }];
    });
