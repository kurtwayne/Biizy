angular
    .module('biizyApp') 
    .controller("step5existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step6exist");
                    }
    });