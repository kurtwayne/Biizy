angular
    .module('biizyApp') 
    .controller("step5newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step6new");
                    }
    });