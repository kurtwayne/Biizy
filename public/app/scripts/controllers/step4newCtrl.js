angular
    .module('biizyApp') 
    .controller("step4newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step5new");
                    }
    });