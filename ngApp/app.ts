namespace onlineshop {

    angular.module('onlineshop', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: onlineshop.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/ngApp/views/signup.html',
                controller: onlineshop.Controllers.SignupController,
                controllerAs: 'controller'
            })
            .state('aftersignuplogin', {
                url: '/aftersignuplogin',
                templateUrl: '/ngApp/views/aftersignuplogin.ejs',
                controller: onlineshop.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: onlineshop.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/ngApp/views/profile.html',
                controller: onlineshop.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: '/ngApp/views/cart.html',
                controller: onlineshop.Controllers.CartController,
                controllerAs: 'controller'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: '/ngApp/views/admin.ejs',
                controller: onlineshop.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: onlineshop.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('error', {
                url: '/error',
                templateUrl: '/ngApp/views/error.ejs',
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
