(function () {
"use strict";

angular.module('public')
    .controller('UserPageController', UserPageController);

UserPageController.$inject = ['user', 'menuItem'];
function UserPageController(user, menuItem) {
    var $ctrl = this;
    if (user === undefined) {
        $ctrl.signedIn = false;
    } else {
        $ctrl.user = user;
        $ctrl.menuItem = menuItem;
        $ctrl.signedIn = true;
    }
}

})();
