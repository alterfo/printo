$('.tsd-sex-btn').click ->
  $('.tsd-sex-btn').removeClass 'selected'
  $(this).addClass 'selected'

  updateCanvasImage()

  sex = $(this).attr('data-tsd-sex')
  return