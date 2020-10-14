(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.subscribe', {
     url: '/subscribe',
     templateUrl: 'src/public/subscribe/subscribe-form.html',
     controller: 'SubscribeFormController as subscribeCtrl'
   })
     .state('public.userpage', {
       url: '/user',
       templateUrl: 'src/public/user-page/user-page.html',
       controller: 'UserPageController as userPageCtrl',
       resolve: {
         user: ['SubscribersService', function (SubscribersService) {
           return SubscribersService.getLastSubscriber();
         }],
         menuItem: ['SubscribersService', 'MenuService', function (SubscribersService, MenuService) {
           var user = SubscribersService.getLastSubscriber();
           if (user === undefined) {
             return undefined;
           }
           var shortName = user.favoriteDish;
           return MenuService.getItem(shortName);
         }]
       }
     })
}
})();
