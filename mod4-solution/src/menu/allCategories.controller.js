(function () {
'use strict';

angular.module('data')
.controller('AllCategoriesController', AllCategoriesController);


AllCategoriesController.$inject = ['items'];
function AllCategoriesController(items) {
  var mainlist = this;
  mainlist.items = items.data;
}

})();
