angular
    .module('biizyApp') 
    .controller("step2existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.number = {};
                        $state.go("step3exist");
                    }
    });