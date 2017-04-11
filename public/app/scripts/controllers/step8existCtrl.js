angular
    .module('biizyApp') 
    .controller("step8existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step9exist");
                    }
    });