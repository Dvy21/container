(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menu/templates/categoryItems.template.html',
  bindings: {
    items: '<'
  }
});


})();
