$(function(){
  $(window).on("load", function(){
    $('#showMenu').click(function(){
      $('body').toggleClass('nav-show');
      return false;
    });
    $('#panelClose').click(function() {
    	$('body').removeClass('nav-show');
    	return false;
    });
  }); //end window load things
  $(window).on("scroll", function () {
        $('body').removeClass("nav-show");
        $('#video-header').css({'height':''});
    })

});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function(){
      $('#play-video').click(function(e){
          e.preventDefault();

          var vidCont =   $('.vid-container'),
              w_height =  vidCont.height(),
              w_width =   vidCont.width(),
              videoHeight = vidCont.height();

          $('#video-header').css({'height':w_height});
          vidCont.append('<div id="video"></div>');
          $('.vid-container video').remove();

          jwplayer("video").setup({
              file: "http://www.youtube.com/watch?v=Xnxj2Pn5g8g",
              bufferlength: 5,
              controlbar: 'none',
              stretching: "fill",
              autostart: true,
              events:
              {
                onPlay: function() {

                  $('.brand').addClass('hidden');
                }
              },
              repeat: "none",
              height: w_height,
              width: w_width
          });
      });
    });