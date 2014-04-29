'use strict';

/* Service */

angular.module('ToyotaTCheck.services.Item', [])
  .factory('Item', ['$http', '$log', function($http, $log) {

      var baseUrl = './backend/';

      return {
        edit: function(params) {
          $http
            .post(baseUrl + 'service.php', {
              'data': {
                'id': params.id,
                'key': params.key,
                'value': params.value
              }
            })
            .success(function(data, status) {
              $log.log('id: ' + data.id + ' key: ' + data.key + ' value: ' + data.value);
            });
        }
      };
    }
  ]);
