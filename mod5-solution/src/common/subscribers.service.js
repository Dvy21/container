(function () {
"use strict";

angular.module('common')
    .service('SubscribersService', SubscribersService);

function SubscribersService() {
    var service = this;

    service.subscribers = [];

    service.addSubscriber = function(firstName, lastName, email, phone, favoriteDish) {
        service.subscribers.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            favoriteDish: favoriteDish});
    };

    service.getSubscribers = function() {
        return service.subscribers;
    };

    service.getLastSubscriber = function() {
        if (service.subscribers.length === 0) {
            return undefined;
        } else {
            return service.subscribers[service.subscribers.length - 1];
        }
    };
}
})();
