$('div#tabs').on('click', 'div', function() {
    $('div#tabs > div').each(function() {
        $(this).removeClass();
    });
    $(this).addClass('active-tab');

    $('div#content > div').each(function() {
        $(this).removeClass();
    })
    $(`#content div:contains(${$(this).text()})`).addClass("active-content");
});