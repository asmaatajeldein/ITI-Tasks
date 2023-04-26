$('input[value="add"]').on("click", function() {
    var text = $('input[type="text"]').val();
    $(`<li>${text} <span>❌</span></li>`).appendTo('ul');
    $('span').on('click', function() {
        $(this).parent().remove();
    });
    $('input[type="text"]').val("");
});