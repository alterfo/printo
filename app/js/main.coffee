angular
  .module('printo-app', [])


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
    vm.currentTab = 1
    vm.isActiveTab = (tab_number) ->
      tab_number is vm.currentTab

    vm.changeTab = (tab_number) ->
      vm.currentTab = tab_number

    vm.itemParams = {
      sex: 'men'
      product_type: 'tshirt'
      print_type: 'sublimation'
    }

    vm.setSex = (sex) ->
      vm.itemParams.sex = sex

    vm.setProductType = (ptype) ->
      vm.itemParams.product_type = ptype

    vm.setPrintType = (print_type) ->
      vm.itemParams.print_type = print_type



    return
