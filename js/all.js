
$(document).ready(function() {

  


  $(".img1").addClass('active');
  $(".box").addClass('active');
  $(".box2").addClass('active');
  $(".style3").addClass('active');
  $(".productList li").addClass('active');
  $(".productList2 li").addClass('active');

  $('#about').click(function(event) {
      event.preventDefault();
      var about_top = $('#about_title').offset().top;
      $('body').animate({scrollTop: about_top}, 9000);
    });

  $('#Illustration').click(function(event) {
      event.preventDefault();
      var about_top = $('#Illustration_title').offset().top;
      $('body').animate({scrollTop: about_top}, 3000);
    });

  $('#UIdesign').click(function(event) {
      event.preventDefault();
      var about_top = $('#UIdesign_title').offset().top;
      $('body').animate({scrollTop: about_top}, 6000);
    });

  var p2listLength = $('.productList2 li').length;
  for (var i = 0; i < p2listLength; i++) {
    var a = $('.productList2 li').eq(i).children('a:first-child');
    var img = a.attr('href');
    a.css('background-image','url('+img+')');

  }


  slideshow();
  var a=0;
  function slideshow() {
        var li = $('#ui_slide li'),
          num = li.length,
          time = 2000,
          chgtime = 800;
        if (a >= num - 1) {
            li.eq(a).fadeOut(chgtime);
            li.eq(0).fadeIn(chgtime);
            a = 0;
        } else {
            li.eq(a).fadeOut(chgtime);
            li.eq(a + 1).fadeIn(chgtime);
            a = a + 1;
        }
        setTimeout(slideshow, time);
    };


  //lightbox
  lightbox.option({
      'resizeduration':1000,
      'wrapAround':true
      })

});