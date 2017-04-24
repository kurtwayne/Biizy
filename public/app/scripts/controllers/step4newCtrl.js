angular
    .module('biizyApp')
    .controller("step4newCtrl", function($rootScope, $scope, $state) {
      $scope.currentWizard = $rootScope.currentWizard;
      $scope.next = function() {
                        $state.go("step5new");
                    }
    });
