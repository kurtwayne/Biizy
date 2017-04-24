angular
    .module('biizyApp')
    .controller("thankYouCtrl", function($http, $rootScope, $scope, $state) {
      $http.post("/thankyou", $rootScope.currentWizard);
      $scope.next = function() {
                        $state.go("landing");
                    }
    });
