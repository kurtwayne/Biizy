(function() {
     function LandingCtrl() {
         // controller logic
         this.heroTitle = "Get Biizy! Work on the business of your dreams, let us take care of the rest.";
     }
 
     angular
         .module('biizyApp')
         .controller('LandingCtrl', LandingCtrl);
})();