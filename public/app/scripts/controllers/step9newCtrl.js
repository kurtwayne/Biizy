angular
    .module('biizyApp') 
    .controller("step9newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step10new");
                    }
    });