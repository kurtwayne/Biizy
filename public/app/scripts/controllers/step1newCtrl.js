angular
    .module('biizyApp')
    .controller("step1newCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("step2new");
                    }
    });
