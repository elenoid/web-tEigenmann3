// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Loading Page Pop up.
$( document ).ready(function() {
  $('#fig-willkommen').addClass( "js-hover-figcaption" );
});

// Mobile navbar
$('#mobile-menu').on('click', function() {
  $('#navbar').addClass( "js-hover-navbar" );
});

$('#close').on('click', function() {
  $('#navbar').removeClass( "js-hover-navbar" );
});

// Test
$('#link-willkommen').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
});

// If cursor hovers over a figure all previous opened figures close.
$('.figure-width').on('mouseenter', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
});

$('.navbar-center li').on('click', function() {
  $('#navbar').removeClass( "js-hover-navbar" );  
});

// Specific figure is opend
$('#link-neubau').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-neubau').addClass( "js-hover-figcaption" );
});

$('#link-umbau').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-umbau').addClass( "js-hover-figcaption" );
});

$('#link-service').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-service').addClass( "js-hover-figcaption" );
});

$('#link-wasserenthärtung').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-wasserenthärtung').addClass( "js-hover-figcaption" );
});

$('#link-blitzschutz').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-blitzschutz').addClass( "js-hover-figcaption" );
});

$('#link-ausbildung').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-ausbildung').addClass( "js-hover-figcaption" );
});

$('#link-galerie').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-galerie').addClass( "js-hover-figcaption" );
});

$('#link-kontakt').on('click', function() {
  $('.js-figcaption').removeClass( "js-hover-figcaption" );
  $('#fig-kontakt').addClass( "js-hover-figcaption" );
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
