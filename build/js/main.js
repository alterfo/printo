


/* jshint undef: true, unused: true */

/* globals $ */
$('.tsd-step-menu__button').click(function() {
  var nextBlock;
  if ($(this).hasClass('selected')) {
    return false;
  }
  nextBlock = parseInt($(this).attr('data-step'));
  $('.tsd-step-block').hide();
  $('.tsd-step-block[data-step="' + nextBlock + '"]').show();
  $('.tsd-step-menu__button').removeClass('selected');
  return $('.tsd-step-menu__button[data-step="' + nextBlock + '"]').addClass('selected');
});
