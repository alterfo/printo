



angular.module('printo-app', ['ngSpectrum']).filter('range', function() {
  return function(input, total) {
    var i;
    total = parseInt(total);
    i = 0;
    while (i < total) {
      input.push(i);
      i++;
    }
    return input;
  };
}).directive('convertToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) {
        return parseInt(val, 10);
      });
      ngModel.$formatters.push(function(val) {
        return '' + val;
      });
    }
  };
}).controller('FormCtrl', function($scope) {
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
      fontFamily: 'Times New Roman',
      color: '',
      size: 12,
      format: [
        {
          name: 'bold'
        }, {
          name: 'italic'
        }, {
          name: "right"
        }, {
          name: "center"
        }, {
          name: "left"
        }
      ]
    },
    backText: {
      string: '',
      fontFamily: 'Times New Roman',
      color: '',
      size: 12,
      format: [
        {
          name: 'bold'
        }, {
          name: 'italic'
        }, {
          name: "right"
        }, {
          name: "center"
        }, {
          name: "left"
        }
      ]
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
  vm.selectFormatter = function(formatter) {
    return formatter.selected = !formatter.selected;
  };
  vm.formatterClass = function(fname) {
    if (fname.selected) {
      return 'selected tsd-formatter__' + fname;
    } else {
      return 'tsd-formatter__' + fname;
    }
  };
});

$('.tsd-print-type__block').click(function() {
  var sex;
  $('.tsd-print-type__block').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  sex = $(this).attr('data-tsd-printtype');
});






