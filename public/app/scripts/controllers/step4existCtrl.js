angular
    .module('biizyApp')
    .controller("step4existCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("step5exist");
                    }
    });
