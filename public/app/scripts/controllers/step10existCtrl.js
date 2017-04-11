angular
    .module('biizyApp') 
    .controller("step10existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("landing");
                    }
    });