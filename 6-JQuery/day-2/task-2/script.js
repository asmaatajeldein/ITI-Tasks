let $sideMenu = $('#side-menu');
let $sideTabs = $('#side-menu li div:first-child');

$sideMenu.hover(function () {
    $sideMenu.animate({
        "right" : "0px"
    }, 1000)
}, function () {
    $sideMenu.animate({
        "right" : "250px"
    }, 1000)
});

$sideTabs.click(function() {
    $(this).next().toggle();
})
