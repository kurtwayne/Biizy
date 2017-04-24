angular
    .module('biizyApp')
    .controller("step3newCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("step4new");
                    }
    });
