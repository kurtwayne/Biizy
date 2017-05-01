angular
    .module('biizyApp')
    .controller("step7newCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("shipping");
                    }
    });
