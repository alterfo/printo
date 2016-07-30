$('.tsd-type-btn').click ->
  $('.tsd-type-btn').removeClass 'selected'
  $(this).addClass 'selected'
  updateCanvasImage()

  type = $(this).attr('data-tsd-type')
  return