angular
    .module('biizyApp')
    .controller("step5newCtrl", function($rootScope, $scope, $state) {
      $scope.currentWizard = $rootScope.currentWizard;
      $scope.next = function() {
                        $state.go("step6new");
                    }
    });
