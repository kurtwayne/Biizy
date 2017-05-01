angular
    .module('biizyApp')
    .controller("step1existCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("step2exist");
                    }
    });
