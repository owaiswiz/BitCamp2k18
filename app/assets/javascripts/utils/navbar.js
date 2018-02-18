/* global $ */
$(document).on('turbolinks:load', function() {
  $('a.nav-link.handlejs').off('click.navbarjs').on('click.navbarjs',function(event){
    if(window.location.pathname == '/') {
      event.preventDefault();
      var section = $(this).data('navigate');
      $('html, body').animate({
        scrollTop: $('section.' + section).offset().top
      });
    }
  });
});
