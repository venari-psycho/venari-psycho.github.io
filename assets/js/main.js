/**
* Template Name: Kelly - v2.0.0
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Icone del toggle mobile: inline, per non dipendere da un icon-font.
  var ICON_MENU = '<i class="svg-icon svg-icon-navigation-menu" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" focusable="false"><path d="M4 7h16M4 12h16M4 17h16"/></svg></i>';
  var ICON_CLOSE = '<i class="svg-icon svg-icon-close" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" focusable="false"><path d="m6 6 12 12M18 6 6 18"/></svg></i>';

  // Durata delle animazioni di scroll: azzerata se l'utente ha chiesto meno movimento.
  function scrollDuration() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1500;
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, scrollDuration(), 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          closeMobileNav();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  // Le due icone stanno entrambe nel pulsante e si alternano via CSS: sostituire
  // il contenuto con .html() staccherebbe dal DOM il nodo appena cliccato, e
  // l'handler "click fuori" più sotto lo leggerebbe come un click esterno,
  // richiudendo il menu nello stesso click che l'ha aperto.
  function closeMobileNav() {
    $('body').removeClass('mobile-nav-active');
    $('.mobile-nav-toggle')
      .attr('aria-expanded', 'false')
      .attr('aria-label', 'Apri il menu di navigazione');
    $('.mobile-nav').attr('aria-hidden', 'true');
    $('.mobile-nav-overly').fadeOut();
  }

  function openMobileNav() {
    $('body').addClass('mobile-nav-active');
    $('.mobile-nav-toggle')
      .attr('aria-expanded', 'true')
      .attr('aria-label', 'Chiudi il menu di navigazione');
    $('.mobile-nav').attr('aria-hidden', 'false');
    $('.mobile-nav-overly').show();
  }

  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    }).attr({
      id: 'mobile-nav',
      'aria-label': 'Menu di navigazione',
      'aria-hidden': 'true'
    });
    $('body').append($mobile_nav);
    $('body').prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none" aria-label="Apri il menu di navigazione" aria-expanded="false" aria-controls="mobile-nav">' + ICON_MENU + ICON_CLOSE + '</button>'
    );
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      e.stopPropagation();
      if ($('body').hasClass('mobile-nav-active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Esc chiude il menu e riporta il focus sul pulsante.
    $(document).on('keydown', function(e) {
      if (e.key === 'Escape' && $('body').hasClass('mobile-nav-active')) {
        closeMobileNav();
        $('.mobile-nav-toggle').trigger('focus');
      }
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
          closeMobileNav();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button and icon-scroll (only in home)
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('.icon-scroll').fadeOut('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('.icon-scroll').fadeIn('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, scrollDuration(), 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("data-progress") + '%');
    });
  }, {
    offset: '80%'
  });

})(jQuery);