angular
    .module('biizyApp') 
    .controller("step9existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step10exist");
                    }
    });