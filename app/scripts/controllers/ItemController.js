'use strict';

/** Controller */

angular.module('ToyotaTCheck.controllers.ItemController', [])
  .controller('ItemController', [
    '$scope',
    '$firebase',
    '$log',
    '$q',
    '$timeout',
    '$window',
    'FirebaseService',
    'Item',
    'Log',
    'Util',
    function($scope, $firebase, $log, $q, $timeout, $window, FirebaseService, Item, Log, Util) {

      var tplBaseUrl = './scripts/directives/templates/';

      $scope.isSaveBtnDisabled = false;
      $scope.years = [];
      $scope.isItemChanged = false;

      $scope.templateUrl = tplBaseUrl +
        ($scope.item.type === 'sub-category' ? 'unswipable.html' : 'swipable.html');

      switch ($scope.item.fieldType) {
      case 'list':
        $scope.inputFieldTemplateUrl = tplBaseUrl + 'iList.html';
        $scope.years = FirebaseService.years;
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

      $scope.saveItemValue = function() {
        $scope.isSaveBtnDisabled = true;
        $scope.loadingOverlay.isShow = true;
        $scope.item.$save()
          .then(function() {
            Log.add({
              id: $scope.item.id,
              title: $scope.item.title,
              key: 'value',
              value: $scope.item.value
            });
            $scope.isSaveBtnDisabled = false;
            $scope.loadingOverlay.isShow = false;
          });
      };

      $scope.item.$on('child_changed', function() {
        $scope.isItemChanged = true;
        $timeout(function() {
          $scope.isItemChanged = false;
        }, 1100);
      });
      // Hack: Prevent binding event more than once
      $scope.$on('$destroy', function() {
        $scope.item.$off('child_changed');
      });
    }
  ]);
