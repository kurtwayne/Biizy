angular
    .module('biizyApp')
    .controller("step6existCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("step7exist");
                    }
    });
