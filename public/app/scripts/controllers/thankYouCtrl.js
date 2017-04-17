angular
    .module('biizyApp') 
    .controller("thankYouCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("landing");
                    }
    });