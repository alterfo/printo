



angular.module('printo-app', []).controller('FormCtrl', function() {
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
  vm.currentTab = 1;
  vm.isActiveTab = function(tab_number) {
    return tab_number === vm.currentTab;
  };
  vm.changeTab = function(tab_number) {
    return vm.currentTab = tab_number;
  };
  vm.itemParams = {
    sex: 'men',
    product_type: 'tshirt',
    print_type: 'sublimation'
  };
  vm.setSex = function(sex) {
    return vm.itemParams.sex = sex;
  };
  vm.setProductType = function(ptype) {
    return vm.itemParams.product_type = ptype;
  };
  vm.setPrintType = function(print_type) {
    return vm.itemParams.print_type = print_type;
  };
});

$('.tsd-print-type__block').click(function() {
  var sex;
  $('.tsd-print-type__block').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  sex = $(this).attr('data-tsd-printtype');
});

$('.tsd-sex-btn').click(function() {
  var sex;
  $('.tsd-sex-btn').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  sex = $(this).attr('data-tsd-sex');
});



$('.tsd-type-btn').click(function() {
  var type;
  $('.tsd-type-btn').removeClass('selected');
  $(this).addClass('selected');
  updateCanvasImage();
  type = $(this).attr('data-tsd-type');
});
