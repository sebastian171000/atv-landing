jQuery(document).ready($ => {
    $('.radio label').on('click', function() {
        $('.radio label').removeClass('radio-click')
        $(this).addClass('radio-click');
    });
});