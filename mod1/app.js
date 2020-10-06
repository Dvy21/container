(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)
  
  LunchCheckController.$injector = ["$scope"];
  function LunchCheckController ($scope) {
    $scope.message = "";
    $scope.check = function () {
      if ($scope.input_string === undefined || $scope.input_string === "") {
        $scope.message = "Please enter data first"
      } else {
        let res = $scope.input_string.split(",").length;
        if(res <= 3 && res >= 1) {
          $scope.message = "Enjoy!"
        } else if (res > 3) {
          $scope.message = "Too much!"
        }
      }
    }
  };
})();
