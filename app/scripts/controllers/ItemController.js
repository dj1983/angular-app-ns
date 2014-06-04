'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', [
    '$scope',
    '$firebase',
    '$log',
    '$q',
    '$window',
    'FirebaseService',
    'Item',
    'Log',
    'Util',
    function($scope, $firebase, $log, $q, $window, FirebaseService, Item, Log, Util) {

      var tplBaseUrl = './scripts/directives/templates/';

      $scope.isSaveBtnDisabled = false;
      $scope.years = [];

      $scope.templateUrl = tplBaseUrl +
        ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');

      Util.getYears().then(function(years) {
        $scope.years = years;
      });

      switch ($scope.item.fieldType) {
      case 'list':
        $scope.inputFieldTemplateUrl = tplBaseUrl + 'iList.html';
        $scope.years = Util.getYears();
        break;
      case 'date':
        $scope.inputFieldTemplateUrl = tplBaseUrl + 'iDatepicker.html';
        break;
      default:
        $scope.inputFieldTemplateUrl = tplBaseUrl + 'iText.html';
        break;
      }

      $scope.childItems = [];
      $firebase(FirebaseService.root.child('items'))
        .$on('loaded', function(childSnapshot) {
          $scope.childItems = Util.getItemTree($scope.item.children, childSnapshot);
        });

      $scope.item = $firebase(FirebaseService.root.child('/items/' + $scope.item.id));

      // This event is triggered every time there is a remote change 
      // in the data which was applied to the local object.
      $scope.item.$on('change', function(key) {
        $log.log('change :: ', key, ' :: changed to ', $scope.item[key]);
        Log.add({
          id: $scope.item.id,
          title: $scope.item.title,
          key: key,
          value: $scope.item[key]
        });
      });

      $scope.saveItemValue = function() {
        $scope.isSaveBtnDisabled = true;
        $scope.item.$save()
          .then(function() {
            $scope.isSaveBtnDisabled = false;
          });
      };
    }
  ]);
