#$('.tsd-image__tabs').click ->
#  if $(this).hasClass('selected')
#    return false
#
#  current_image_tab = $('.tsd-image__tabs.selected').attr('data-image-tab')
#  next_image_tab = $(this).attr('data-image-tab')
#
#
#  $('.tsd-image__tabcontent').addClass('tsd-hidden')
#  $('.tsd-image__tabcontent[data-image-tab="' + next_image_tab + '"]').removeClass('tsd-hidden')
#  $('.tsd-image__tabs').removeClass 'selected'
#  $('.tsd-image__tabs[data-image-tab="' + next_image_tab + '"]').addClass 'selected'
#
#$('.tsd-color-chooser__predefined-color-list-item').click ->
#  if $(this).hasClass('selected')
#    return false
#
#  color = $(this).attr('data-tsd-color')
#  current_side = $(this).closest('.tsd-color-chooser').attr('data-image-tabcontent')
#
#  $('[data-image-tabcontent="' + current_side + '"] .tsd-color-chooser__predefined-color-list-item').removeClass('selected')
#  $(this).addClass('selected')
#
#
#applyImage = (image, side) ->
#  if (image.files && image.files[0])
#    reader = new FileReader()
#    reader.onload = (e) ->
#      setCanvasImage(e.target.result, side)
#      reader.readAsDataURL(image.files[0])
#
#$('#frontside_image').change ->
#  applyImage(@, 'frontside')
#
#$('#backside_image').change ->
#  applyImage(@, 'backside')
#
#
#
#$('.tsd-image-uploader__form-button').click ->
#  $(this).next().find('input').click()
