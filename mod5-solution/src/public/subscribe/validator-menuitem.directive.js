(function () {
"use strict";

angular.module('public')
    .directive('menuInput', MenuInputDirective);

MenuInputDirective.$inject = ['MenuService'];
function MenuInputDirective(MenuService) {
    var ddo = {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$asyncValidators.menuIput = function (modelValue, viewValue) {
                console.log(ctrl);
                if (ctrl.$isEmpty(modelValue)) {
                    return Promise.resolve(true);
                }

                return MenuService.getItem(modelValue);
            }
        }
    };
    return ddo;
}
})();
