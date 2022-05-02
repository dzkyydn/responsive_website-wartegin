/*
  Copyright © 2022 
  Develop by Farhan Yuswa Biyanto and Muhammad Dzakiyyudin.
  Pemrograman Berbasis Web, 
  Broadband Multimedia, 
  Politeknik Negeri Jakarta.
*/

// modal JAVASCRIPT
$(document).ready(function(){
    $('.click1').click(function(){
      $('.popup_box1').css("display", "block");
      /*document.body.style.overflow = 'hidden';*/
    });
    $('.btn1').click(function(){
      $('.popup_box1').css("display", "none");
      /*document.body.style.overflow = 'visible';*/
    });

    $('.click2').click(function(){
      $('.popup_box2').css("display", "block");
      /*document.body.style.overflow = 'hidden';*/
    });
    $('.btn1').click(function(){
      $('.popup_box2').css("display", "none");
      /*document.body.style.overflow = 'visible';*/
    });

    $('.click3').click(function(){
      $('.popup_box3').css("display", "block");
      /*document.body.style.overflow = 'hidden';*/
    });
    $('.btn1').click(function(){
      $('.popup_box3').css("display", "none");
      /*document.body.style.overflow = 'visible';*/
    });

    $('.click4').click(function(){
      $('.popup_box4').css("display", "block");
      /*document.body.style.overflow = 'hidden';*/
    });
    $('.btn1').click(function(){
      $('.popup_box4').css("display", "none");
      /*document.body.style.overflow = 'visible';*/
    });
});


// smooth scroll JAVASCIRPT
$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.menu-header-footer').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});