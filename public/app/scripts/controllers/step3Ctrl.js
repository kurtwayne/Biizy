angular
    .module('biizyApp') 
    .controller("step3Ctrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step4");
                    }
    });