angular
    .module('biizyApp') 
    .controller("step7existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("shipping");
                    }
    });