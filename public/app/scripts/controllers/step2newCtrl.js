angular
    .module('biizyApp') 
    .controller("step2newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.number = {};
                        $state.go("step3new");
                    }
    });