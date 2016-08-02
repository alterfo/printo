angular
  .module('printo-app', ['ngSpectrum'])


  .controller 'FormCtrl', ->
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
    vm.currentTab = 2
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

    }


    return
