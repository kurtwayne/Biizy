angular
    .module('biizyApp')
    .controller("NewOrExistCtrl", function($rootScope, $scope, $state) {
                    $scope.next = function(stepName) {
                        $state.go(stepName);
                        //"step1" + 
                    }
    });