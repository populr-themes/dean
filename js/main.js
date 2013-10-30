$(document).on('pop-initialized', function(){
  $('.asset-type-imagegroup').live('initialize', function(){
    var ss = $(this).find('.populr-image-slider .slideshow');
    var ss_next = ss.next();
    if (ss.find('.overlay').length === 0 && !ss_next.hasClass('overlay')) {
      ss.after('<div class="overlay">&nbsp;</div>');
    }
  });
});