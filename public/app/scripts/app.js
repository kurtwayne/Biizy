angular.module('biizyApp', ['ui.router'])
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider
                // removes "/#!/" from the URL
                .html5Mode({
                    enabled: true,
                    requireBase: false
                });

            $stateProvider
                 .state('landing', {
                    url: '/',
                    controller: 'LandingCtrl',
                    templateUrl: '/app/templates/landing.html'
                 })
                  .state('request', {
                     url: '/request',
                     controller: 'RequestCtrl',
                     templateUrl: '/app/templates/request.html'
                 })
                 .state('services', {
                     url: '/services',
                     controller: 'ServicesCtrl',
                     templateUrl: '/app/templates/services.html'
                 })
                 .state('faq', {
                     url: '/faq',
                     controller: 'FaqCtrl',
                     templateUrl: '/app/templates/faq.html'
                 })
                // Wizard "You're a wizard, Biizy"
                 .state('step1', {
                     url: '/step1',
                     controller: 'step1Ctrl',
                     templateUrl: '/app/templates/step1.html'
                 })
                 .state('step2', {
                     url: '/step2',
                     controller: 'step2Ctrl',
                     templateUrl: '/app/templates/step2.html'
                 })
                 .state('step3', {
                     url: '/step3',
                     controller: 'step3Ctrl',
                     templateUrl: '/app/templates/step3.html'
                 })
    
            $urlRouterProvider.otherwise("/");
                 });