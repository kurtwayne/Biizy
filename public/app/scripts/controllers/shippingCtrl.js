angular
    .module('biizyApp') 
    .controller("shippingCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function() {
                        $rootScope.currentWizard.lastName = {};
                        $state.go("payment");
                    }
    });