angular
    .module('biizyApp') 
    .controller("step4existCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("step5exist");
                    }
    });