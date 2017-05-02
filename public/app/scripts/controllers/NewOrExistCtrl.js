angular
    .module('biizyApp')
    .controller("NewOrExistCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function(stepName) {
                        console.log("Step1 button Clicked")
                        $rootScope.currentWizard = {};
                        $rootScope.currentWizard.entity = {};
                        $state.go(stepName);
                    }
    });
