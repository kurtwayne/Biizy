angular
    .module('biizyApp')
    .controller("step1existCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        console.log("Step1 button Clicked")
                        $rootScope.currentWizard = {};
                        $rootScope.currentWizard.entity = {};
                        $state.go("step2exist");
                    }
    });
