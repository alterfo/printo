#### jshint undef: true, unused: true ###
#
#### globals $ ###
#
#$('.tsd-step-menu__button').click ->
#
#  if $(this).hasClass('selected')
#    return false
#
#  current_step = parseInt($('.tsd-step-menu__button.selected').attr('data-step'));
#
#  nextBlock = parseInt($(this).attr('data-step'))
#
#  $('.tsd-step-block').addClass('tsd-hidden')
#  $('.tsd-step-block[data-step="' + nextBlock + '"]').removeClass('tsd-hidden')
#  $('.tsd-step-menu__button').removeClass 'selected'
#  $('.tsd-step-menu__button[data-step="' + nextBlock + '"]').addClass 'selected'
#
#  $('.tsd-btn').removeClass('tsd-btn--disabled')
#  if nextBlock is 1
#    $('.tsd-btn__back').addClass('tsd-btn--disabled')
#  if nextBlock is 4
#    $('.tsd-btn__next').addClass('tsd-btn--disabled')
