$('.tsd-btn__back').click(function() {
  var current_step, prev_step;
  if ($(this).hasClass('tsd-btn--disabled')) {
    return false;
  }
  current_step = $('.tsd-step-menu__button.selected').attr('data-step');
  prev_step = +current_step - 1;
  $('.tsd-step-menu__button[data-step="' + prev_step + '"]').click();
  return false;
});

$('.tsd-btn__next').click(function() {
  var current_step, next_step;
  if ($(this).hasClass('tsd-btn--disabled')) {
    return false;
  }
  current_step = $('.tsd-step-menu__button.selected').attr('data-step');
  next_step = +current_step + 1;
  $('.tsd-step-menu__button[data-step="' + next_step + '"]').click();
  return false;
});



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
  var current_step, nextBlock;
  if ($(this).hasClass('selected')) {
    return false;
  }
  current_step = parseInt($('.tsd-step-menu__button.selected').attr('data-step'));
  nextBlock = parseInt($(this).attr('data-step'));
  $('.tsd-step-block').hide();
  $('.tsd-step-block[data-step="' + nextBlock + '"]').show();
  $('.tsd-step-menu__button').removeClass('selected');
  $('.tsd-step-menu__button[data-step="' + nextBlock + '"]').addClass('selected');
  $('.tsd-btn').removeClass('tsd-btn--disabled');
  if (nextBlock === 1) {
    $('.tsd-btn__back').addClass('tsd-btn--disabled');
  }
  if (nextBlock === 4) {
    return $('.tsd-btn__next').addClass('tsd-btn--disabled');
  }
});

$('.tsd-type-btn').click(function() {
  var type;
  $('.tsd-type-btn').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  type = $(this).attr('data-tsd-type');
});
