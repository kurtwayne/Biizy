angular
    .module('biizyApp') 
    .controller("paymentCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("thankyou");
                    }
    });