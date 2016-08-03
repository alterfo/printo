



angular.module('printo-app', ['ngSpectrum']).controller('FormCtrl', function() {
  var vm;
  vm = this;

  /*
          TABS
   */
  vm.tabs = [
    {
      id: 1,
      name: "1. Изделие"
    }, {
      id: 2,
      name: "2. Изображение"
    }, {
      id: 3,
      name: "3. Надпись"
    }, {
      id: 4,
      name: "4. Результат"
    }
  ];
  vm.currentTab = 3;
  vm.isActiveTab = function(tab_number) {
    return tab_number === vm.currentTab;
  };
  vm.changeTab = function(tab_number) {
    return vm.currentTab = tab_number;
  };
  vm.itemParams = {
    sex: 'men',
    product_type: 'tshirt',
    print_type: 'sublimation',
    frontside_params: {},
    backside_params: {},
    frontText: {
      string: '',
      fontFamily: ''
    },
    backText: {
      string: '',
      fontFamily: ''
    }
  };
  vm.setSex = function(sex) {
    return vm.itemParams.sex = sex;
  };
  vm.setProductType = function(ptype) {
    return vm.itemParams.product_type = ptype;
  };
  vm.setPrintType = function(print_type) {
    return vm.itemParams.print_type = print_type;

    /*
          IMAGE TAB
     */
  };
  vm.currentSide = 'frontside';
  vm.predefinedColors = ['#000', '#ec008c', '#f00', '#f26521', '#fff200', '#177b2f', '#00bff3', '#a7a7a7', '#8c2424'];
  vm.setBacksideColor = function(color) {
    return vm.itemParams.backside_params.color = color;
  };
  vm.setFrontsideColor = function(color) {
    return vm.itemParams.frontside_params.color = color;
  };
  vm.setSide = function(side) {
    return vm.currentSide = side;
  };
  vm.spectrumOptions = {};

  /*
            ТЕКСТ
   */
  vm.fonts = [
    {
      name: 'Times New Roman'
    }
  ];
});

$('.tsd-print-type__block').click(function() {
  var sex;
  $('.tsd-print-type__block').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  sex = $(this).attr('data-tsd-printtype');
});






