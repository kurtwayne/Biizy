angular
    .module('biizyApp')
    .controller("step6newCtrl", function($rootScope, $scope, $state) {
      $scope.currentWizard = $rootScope.currentWizard;
      $scope.next = function() {
                        $state.go("step7new");
                    }
    });
