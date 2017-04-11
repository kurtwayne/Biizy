angular
    .module('biizyApp') 
    .controller("step3existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step4exist");
                    }
    });