/* jshint undef: true, unused: true */
/* globals $ */
$('.tsd-step-menu__button').click(function () {
    if ($(this).hasClass('selected')) {
        return false;
    }

    var tmpBlock = parseInt($(this).parents('.tsd-step-block').attr('data-step'));

    var nextBlock = parseInt($(this).attr('data-step'));
    $('.tsd-step-block').hide();
    $('.tsd-step-block[data-step="' + nextBlock + '"]').show();
    $('.tsd-step-menu__button').removeClass('selected');
    $('.tsd-step-menu__button[data-step="' + nextBlock + '"]').addClass('selected');
    if (nextBlock === 4) {
        $('.panel__side-front .panel__result-img').attr('src', makePreview($('.panel__side-front')));
        $('.panel__side-back .panel__result-img').attr('src', makePreview($('.panel__side-back')));
        $('.panel').addClass('showresult');
    } else {
        $('.panel').removeClass('showresult');
    }
    if (nextBlock === 2) {
        if ($('.panel__side-front .panel__bg').attr('src') === '') {
            $('.panel__side-front .panel__load-your-image').show();
        }
        if ($('.panel__side-back .panel__bg').attr('src') === '') {
            $('.panel__side-back .panel__load-your-image').show();
        }
    } else {
        $('.panel__load-your-image').hide();
    }
    if (nextBlock > 1) {
        $('.panel').removeClass('mhide');
    }
    if (nextBlock === 1) {
        $('.panel').addClass('mhide');
    }
    switch (nextBlock) {
        case 1:
            dataLayer.push({
                event: 'autoEvent',
                eventCategory: 'SvoyDizayn',
                eventAction: 'typeProduct'
            });
            break;
        case 2:
            dataLayer.push({
                event: 'autoEvent',
                eventCategory: 'SvoyDizayn',
                eventAction: 'image'
            });
            break;
        case 3:
            dataLayer.push({
                event: 'autoEvent',
                eventCategory: 'SvoyDizayn',
                eventAction: 'text'
            });
            break;
        case 4:
            dataLayer.push({
                event: 'autoEvent',
                eventCategory: 'SvoyDizayn',
                eventAction: 'result'
            });
            break;
    }
});
