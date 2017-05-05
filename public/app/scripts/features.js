// Parallaxing + add class active on scroll
$(document).scroll(function () {

  // parallaxing
  //var $movebg = $(window).scrollTop() * -0.3;
  //$('.portion').css('background-positionY', ($movebg) + 'px');

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;

  // changing padding of nav a on scroll
    if (scrollPos > 250) {
      $('nav').addClass('fade')
      $('nav a').addClass('small');
      $('nav img').addClass('move');
      $('nav span').removeClass('movetext');
    } else {
      $('nav').removeClass('fade')
      $('nav a').removeClass('small');
      $('nav img').removeClass('move');
      $('nav span').addClass('movetext');
    }

});
