

$('.tsd-print-type__block').click(function() {
  var sex;
  $('.tsd-print-type__block').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  sex = $(this).attr('data-tsd-printtype');
});

$('.tsd-sex-btn').click(function() {
  var sex;
  $('.tsd-sex-btn').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  sex = $(this).attr('data-tsd-sex');
});


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

$('.tsd-type-btn').click(function() {
  var type;
  $('.tsd-type-btn').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  type = $(this).attr('data-tsd-type');
});
