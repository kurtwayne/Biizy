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
                // Wizard "You're a wizard, Biizy!"
                 .state('neworexist', {
                     url: '/neworexist',
                     controller: 'NewOrExistCtrl',
                     templateUrl: '/app/templates/neworexist.html'
                 })
                // Exist & New States Wizard
                 .state('step1new', {
                     url: '/step1new',
                     controller: 'step1newCtrl',
                     templateUrl: '/app/templates/step1new.html'
                 })
                 .state('step1exist', {
                     url: '/step1exist',
                     controller: 'step1existCtrl',
                     templateUrl: '/app/templates/step1exist.html'
                 })
                 .state('step2new', {
                     url: '/step2new',
                     controller: 'step2newCtrl',
                     templateUrl: '/app/templates/step2new.html'
                 })
                 .state('step2exist', {
                     url: '/step2exist',
                     controller: 'step2existCtrl',
                     templateUrl: '/app/templates/step2exist.html'
                 })
                 .state('step3new', {
                     url: '/step3new',
                     controller: 'step3newCtrl',
                     templateUrl: '/app/templates/step3new.html'
                 })
                  .state('step3exist', {
                     url: '/step3exist',
                     controller: 'step3existCtrl',
                     templateUrl: '/app/templates/step3exist.html'
                 })
                 .state('step4new', {
                     url: '/step4new',
                     controller: 'step4newCtrl',
                     templateUrl: '/app/templates/step4new.html'
                 })
                 .state('step4exist', {
                     url: '/step4exist',
                     controller: 'step4existCtrl',
                     templateUrl: '/app/templates/step4exist.html'
                 })
                 .state('step5new', {
                     url: '/step5new',
                     controller: 'step5newCtrl',
                     templateUrl: '/app/templates/step5new.html'
                 })
                 .state('step5exist', {
                     url: '/step5exist',
                     controller: 'step5existCtrl',
                     templateUrl: '/app/templates/step5exist.html'
                 })
                 .state('step6new', {
                     url: '/step6new',
                     controller: 'step6newCtrl',
                     templateUrl: '/app/templates/step6new.html'
                 })
                  .state('step6exist', {
                     url: '/step6exist',
                     controller: 'step6existCtrl',
                     templateUrl: '/app/templates/step6exist.html'
                 })    
                 .state('step7new', {
                     url: '/step7new',
                     controller: 'step7newCtrl',
                     templateUrl: '/app/templates/step7new.html'
                 })
                 .state('step7exist', {
                     url: '/step7exist',
                     controller: 'step7existCtrl',
                     templateUrl: '/app/templates/step7exist.html'
                 })
                 .state('step8new', {
                     url: '/step8new',
                     controller: 'step8newCtrl',
                     templateUrl: '/app/templates/step8new.html'
                 })
                 .state('step8exist', {
                     url: '/step8exist',
                     controller: 'step8existCtrl',
                     templateUrl: '/app/templates/step8exist.html'
                 })
                 .state('step9new', {
                     url: '/step9new',
                     controller: 'step9newCtrl',
                     templateUrl: '/app/templates/step9new.html'
                 })
                  .state('step9exist', {
                     url: '/step9exist',
                     controller: 'step9existCtrl',
                     templateUrl: '/app/templates/step9exist.html'
                 })
                 .state('step10new', {
                     url: '/step10new',
                     controller: 'step10newCtrl',
                     templateUrl: '/app/templates/step10new.html'
                 })
                 .state('step10exist', {
                     url: '/step10exist',
                     controller: 'step10existCtrl',
                     templateUrl: '/app/templates/step10exist.html'
                 })
    
            $urlRouterProvider.otherwise("/");
                 });