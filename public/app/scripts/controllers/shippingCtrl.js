angular
    .module('biizyApp')
    .controller("shippingCtrl", function($rootScope, $scope, $state) {
      $scope.currentWizard = $rootScope.currentWizard;
      $scope.next = function() {
                        $state.go("payment");
                    }
    });
