angular
    .module('biizyApp')
    .controller("step1Ctrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        console.log("Step1 button Clicked")
                        $rootScope.currentWizard = {};
                        $rootScope.currentWizard.entity = {};
                        $rootScope.currentWizard.newEntity = {};
                        $state.go("step2");
                    }
    });