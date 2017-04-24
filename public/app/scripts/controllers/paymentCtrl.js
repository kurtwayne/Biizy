angular
    .module('biizyApp')
    .controller("paymentCtrl", function($rootScope, $scope, $state) {
      $scope.currentWizard = $rootScope.currentWizard;
      $scope.next = function() {
                        $state.go("thankyou");
                    }
    });
