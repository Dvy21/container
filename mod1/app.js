(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MyFirstController', function () {
  function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
    }
    const itemString = 'item1,item2,item3,'

    const space = ' '
    const comma = ','

  splitString(itemString, comma)


});

MsgController.$inject = ['$scope'];
function MsgController ($scope) {
  $scope.placeholder = 'items';
  $scope.sayMessage = function () {
    return "Enjoy!";

  }
  };



})();
