#$('.tsd-btn__back').click ->
#  if $(this).hasClass('tsd-btn--disabled')
#    return false
#
#  current_step = $('.tsd-step-menu__button.selected').attr('data-step')
#  prev_step = +current_step - 1
#  $('.tsd-step-menu__button[data-step="'+ prev_step + '"]').click()
#  return false
#
#$('.tsd-btn__next').click ->
#  if $(this).hasClass('tsd-btn--disabled')
#    return false
#
#  current_step = $('.tsd-step-menu__button.selected').attr('data-step')
#  next_step = +current_step + 1
#  $('.tsd-step-menu__button[data-step="' + next_step + '"]').click()
#  return false