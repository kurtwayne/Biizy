angular
    .module('biizyApp') 
    .controller("step8newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step9new");
                    }
    });