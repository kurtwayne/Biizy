angular
    .module('biizyApp')
    .controller("LandingCtrl", function($scope, $state) {
        $scope.start = function() {
            console.log("Start button Clicked")
            $state.go('step1')
        }
});