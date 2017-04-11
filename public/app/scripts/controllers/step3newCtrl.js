angular
    .module('biizyApp') 
    .controller("step3newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step4new");
                    }
    });