$(document).ready(function () {
    setCurrentSliderPhoto();
});

function setCurrentSliderPhoto() {
    $('.current-photo').css('background-image', 'url(' + $(".photo-bar-item-current img").attr('src') + ')');
}

$(".photo-bar-item").click(function () {
    $('.photo-bar-item-current').removeClass("photo-bar-item-current");
    $(this).addClass("photo-bar-item-current");
    setCurrentSliderPhoto();
});

$('.burger a').click(function(){
    $('.mobile-menu-box').show("slow")
});

$('.mobile-menu-box-close a').click(function(){
    $('.mobile-menu-box').hide("slow")
});