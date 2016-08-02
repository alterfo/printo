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

var applyImage;

$('.tsd-image__tabs').click(function() {
  var current_image_tab, next_image_tab;
  if ($(this).hasClass('selected')) {
    return false;
  }
  current_image_tab = $('.tsd-image__tabs.selected').attr('data-image-tab');
  next_image_tab = $(this).attr('data-image-tab');
  $('.tsd-image__tabcontent').addClass('tsd-hidden');
  $('.tsd-image__tabcontent[data-image-tab="' + next_image_tab + '"]').removeClass('tsd-hidden');
  $('.tsd-image__tabs').removeClass('selected');
  return $('.tsd-image__tabs[data-image-tab="' + next_image_tab + '"]').addClass('selected');
});

$('.tsd-color-chooser__predefined-color-list-item').click(function() {
  var color, current_side;
  if ($(this).hasClass('selected')) {
    return false;
  }
  color = $(this).attr('data-tsd-color');
  current_side = $(this).closest('.tsd-color-chooser').attr('data-image-tabcontent');
  $('[data-image-tabcontent="' + current_side + '"] .tsd-color-chooser__predefined-color-list-item').removeClass('selected');
  return $(this).addClass('selected');
});

applyImage = function(image, side) {
  var reader;
  if (image.files && image.files[0]) {
    reader = new FileReader();
    return reader.onload = function(e) {
      setCanvasImage(e.target.result, side);
      return reader.readAsDataURL(image.files[0]);
    };
  }
};

$('#frontside_image').change(function() {
  return applyImage(this, 'frontside');
});

$('#backside_image').change(function() {
  return applyImage(this, 'backside');
});

$('.tsd-image-uploader__form-button').click(function() {
  return $(this).next().find('input').click();
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
  $('.tsd-step-block').addClass('tsd-hidden');
  $('.tsd-step-block[data-step="' + nextBlock + '"]').removeClass('tsd-hidden');
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
