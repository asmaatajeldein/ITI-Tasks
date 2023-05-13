let $sliderImages = $("#slider-images img");
let $splashScreen = $("#splash-screen");
let $splashScreenImg = $("#splash-screen img");
console.log($sliderImages);
let currentImgIndex = 0;


$sliderImages.click(function () {
    currentImgIndex = $sliderImages.index(this);
    const imgSrc = $(this).attr("src");

    $splashScreenImg.attr("src", imgSrc);
    $splashScreen.show();
});

$splashScreen.click(function (eventObj) {
    if(eventObj.target === this) {
        $splashScreen.hide();
    }
});

$("#next-btn").click(function() {
    if(currentImgIndex < $sliderImages.length) {
        currentImgIndex++;
    }
    const imgSrc = $sliderImages.eq(currentImgIndex).attr("src");

    $splashScreenImg.attr("src", imgSrc);
});


$("#prev-btn").click(function () {
    if(currentImgIndex > 0) {
        currentImgIndex--;
    }

    const imgSrc = $sliderImages.eq(currentImgIndex).attr("src");

    $splashScreenImg.attr("src", imgSrc);
});