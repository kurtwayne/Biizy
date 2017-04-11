angular
    .module('biizyApp') 
    .controller("step6newCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step7new");
                    }
    });