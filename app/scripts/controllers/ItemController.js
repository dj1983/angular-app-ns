'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', [
    '$scope',
    '$window',
    'Item',
    'FirebaseService',
    'Util',
    '$firebase',
    '$q',
    '$log',
    function($scope, $window, Item, FirebaseService, Util, $firebase, $q, $log) {

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
        $scope.years = Util.getYears;
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

      $scope.item.$on('change', function(key) {
        $log.log('ItemController :: ', key, ' :: changed');
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
