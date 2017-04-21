angular
    .module('biizyApp')
    .controller("step2newCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("step3new");
                    }
    });
