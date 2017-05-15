// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-animate
//= require angular-resource
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .
$(document).ready(function(){
  window.onbeforeunload = function(){ window.scrollTo(0,0); }
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);
    // var locationForHome = window.location.href.split('/')
    // if (scrollTop >= 100) {
    //   $('#main-header').addClass('scrolled-nav');
    //   $('#main-header').css("background","#324c5f") 
    // } else if (scrollTop < 100 && 
    //   (locationForHome.includes("home") || locationForHome[4] =="" )) { 
    //   $('#main-header').removeClass('scrolled-nav');
    //   $('#main-header').css({'background':'transparent',
    //     'transition': '0.3s all ease-out'
    //   }) 
    // }
    $(".animatedSlide").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("animatedSlideeach");
      }
    });
    if($(this).scrollTop() > 350){
      $('.scrollup').fadeIn();
    }
    else{
      $('.scrollup').fadeOut();
    }
  });
})




