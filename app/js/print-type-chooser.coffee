$('.tsd-print-type__block').click ->
  $('.tsd-print-type__block').removeClass 'selected'
  $(this).addClass 'selected'

  updateCanvasImage()

  sex = $(this).attr('data-tsd-printtype')
  return