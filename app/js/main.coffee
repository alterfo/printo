angular
  .module('printo-app', ['ngSpectrum'])
  .filter 'range', ->
    (input, total) ->
      total = parseInt(total)
      i = 0
      while i < total
        input.push i
        i++
      input
  .directive 'convertToNumber', ->
    {
    require: 'ngModel'
    link: (scope, element, attrs, ngModel) ->
      ngModel.$parsers.push (val) ->
        parseInt val, 10
      ngModel.$formatters.push (val) ->
        '' + val
      return

    }
  .controller 'FormCtrl', ($scope)->
    vm = @
    ###
            TABS
    ###
    vm.tabs = [
      {id: 1, name: "1. Изделие"}
      {id: 2, name: "2. Изображение"}
      {id: 3, name: "3. Надпись"}
      {id: 4, name: "4. Результат"}
    ]
    vm.currentTab = 3
    vm.isActiveTab = (tab_number) ->
      tab_number is vm.currentTab

    vm.changeTab = (tab_number) ->
      vm.currentTab = tab_number

    vm.itemParams = {
      sex: 'men'
      product_type: 'tshirt'
      print_type: 'sublimation'
      frontside_params: {}
      backside_params: {}
      frontText:
        string: ''
        fontFamily: 'Times New Roman'
        color: ''
        size: 12
        format: [
          {
            name: 'bold'
          }
          {
            name: 'italic'
          }
          {
            name: "right"
          }
          {
            name: "center"
          }
          {
            name: "left"
          }
        ]
      backText:
        string: ''
        fontFamily: 'Times New Roman'
        color: ''
        size: 12
        format: [
          {
            name: 'bold'
          }
          {
            name: 'italic'
          }
          {
            name: "right"
          }
          {
            name: "center"
          }
          {
            name: "left"
          }
        ]
    }

    vm.setSex = (sex) ->
      vm.itemParams.sex = sex

    vm.setProductType = (ptype) ->
      vm.itemParams.product_type = ptype

    vm.setPrintType = (print_type) ->
      vm.itemParams.print_type = print_type


      ###
            IMAGE TAB
      ###

    vm.currentSide = 'frontside'
    vm.predefinedColors = ['#000', '#ec008c', '#f00', '#f26521', '#fff200', '#177b2f', '#00bff3', '#a7a7a7', '#8c2424']

    vm.setBacksideColor = (color) ->
      vm.itemParams.backside_params.color = color

    vm.setFrontsideColor = (color) ->
      vm.itemParams.frontside_params.color = color

    vm.setSide = (side) ->
      vm.currentSide = side

    vm.spectrumOptions = {
#     config for color chooser
    }

    ###
              ТЕКСТ
###

    vm.fonts = [
      {
        name: 'Times New Roman'
      }
    ]

    vm.selectFormatter = (formatter) ->
      formatter.selected = !formatter.selected

    vm.formatterClass = (fname) ->
      if fname.selected
        'selected tsd-formatter__' + fname
      else
        'tsd-formatter__' + fname
    return
