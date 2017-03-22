(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
            // removes "/#!/" from the URL
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
             .state('landing', {
                url: '/',
                // designated a controller for a particular state below
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
             })
              .state('request', {
                 url: '/request',
                 controller: 'RequestCtrl as request',
                 templateUrl: '/templates/request.html'
             })
             .state('services', {
                 url: '/services',
                 controller: 'ServicesCtrl as service',
                 templateUrl: '/templates/services.html'
             });
    }
    angular
         .module('biizyApp', ['ui.router'])
         .config(config);
 })();