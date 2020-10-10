(function () {
'use strict';

angular.module('data')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['items' ];
function CategoryItemsController(items) {
  var itemDetail = this;
  itemDetail.items = items;






}

})();
