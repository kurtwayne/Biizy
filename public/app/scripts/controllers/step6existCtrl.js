angular
    .module('biizyApp') 
    .controller("step6existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step7exist");
                    }
    });