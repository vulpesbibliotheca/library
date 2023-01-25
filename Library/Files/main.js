/**
* Template Name: Mentor - v2.0.0
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Initi AOS
  $(window).on('load', function() {
    AOS.init({
      duration: 1000,
      once: true
    });
  });

})(jQuery);

// New PopUp
function newPopup(){
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// URLs
var url = "https://www.google.com";
var btn = document.querySelector("#btn");


function openDoc(book) {

  if (book == "Negro") {
    url = "./Library/Documents/O Negro - Cruz e Souza.pdf";
  } else {
    if (book == "De amor e amizade"){
      url = "./Library/Documents/De Amor e amizade - Clarice Lispector.pdf";
    } else {
      if (book == "Fazenda Modelo"){
        url = "./Library/Documents/Fazenda Modelo - Chico Buarque de Holanda.pdf";
      } else {
        if (book == "O vendedor de passados"){
          url = "./Library/Documents/O Vendedor De Passados - Jose Eduardo Agualusa.pdf";
        } else {
          if (book == "Paulicieia desvairada"){
            url = "./Library/Documents/Paulicéia Desvairada, de Mário de Andrade.pdf";
          } else {
            if (book == "Ânsia Eterna"){
              url = "./Library/Documents/Ânsia Eterna - Júlia Lopes de Almeida.pdf";
            } else {
              if (book == "Boca do Inferno"){
                url = "./Library/Documents/Boca do Inferno - Ana Miranda.pdf";
              } else {
              if (book == "Tratado sobre a Tolerância"){
                url = "./Library/Documents/Tratado sobre a tolerância - Voltaire.pdf";
            } else {
              if (book == "Ética a Nicômaco"){
                url = "./Library/Documents/Ética a Nicômaco - Aristóteles.pdf";
                  }  
                }
              }
            }
          }
        }
      }
    }
  }

  var win = window.open(url, '_blank');
  win.focus();
}

btn.addEventListener('click', function() {
    
  openDoc(url);

});