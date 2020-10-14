(function () {
"use strict";

angular.module('public')
    .controller('SubscribeFormController', SubscribeFormController);

SubscribeFormController.$inject = ['SubscribersService', 'MenuService'];
function SubscribeFormController(SubscribersService, MenuService) {
    var $ctrl = this;

    $ctrl.save = function() {
        MenuService.getItem($ctrl.favoriteDish)
            .then(function onSuccess() {
                SubscribersService.addSubscriber(
                    $ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, $ctrl.favoriteDish);
                $ctrl.success = true;
                $ctrl.dishError = false;
            },
            function onFailure() {
                $ctrl.dishError = true;
                $ctrl.success = false;
            });
    }
}

})();
