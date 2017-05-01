angular
    .module('biizyApp')
    .controller("step5existCtrl", function($rootScope, $scope, $state) {
                    $scope.currentWizard = $rootScope.currentWizard;
                    $scope.next = function() {
                        console.log("Button is Clicked for Step 5")
                        $state.go("step6exist");
                    }
    });
