/* global $ */
$(document).on('turbolinks:load', function() {
  $('a.nav-link[href="/#sponsors"]').off('click.navbarjs').on('click.navbarjs',function(event){
    if(window.location.pathname == '/') {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('section.sponsors').offset().top
      });
    }
  });

});
