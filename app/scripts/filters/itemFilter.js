'use strict';

/** Filter */

angular.module('ToyotaTCheck.filters.itemFilter', [])
  .filter('itemFilter', ['$filter', 'FirebaseService', '$firebase', '$log',
    function($filter, FirebaseService, $firebase, $log) {

      return function(items, itemStatus) {
        // var exprFn = function(item) {
        //   var isPassed = function isPassed(item) {
        //     var len = 0;

        //     if (item.status == itemStatus) {
        //       return true;

        //     } else if (item.items) {
        //       len = item.items.length;

        //       if (!len) {
        //         return false;

        //       } else {
        //         for (var i = 0; i < len; i++) {
        //           if (isPassed(item.items[i])) {
        //             return true;
        //           }
        //         }
        //       }

        //     } else {
        //       return false;
        //     }
        //   };

        //   if (itemStatus == 'all') {
        //     return true;

        //   } else {
        //     return isPassed(item);
        //   }
        // };
        var exprFn = function(item) {
          var isPassed = function isPassed(item) {
            // "item": "1"
            
          };
        };

        return $filter('filter')(items, exprFn);
      };
    }
  ]);