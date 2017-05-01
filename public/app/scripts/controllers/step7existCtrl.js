angular
    .module('biizyApp')
    .controller("step7existCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        $state.go("shipping");
                    }
    });
