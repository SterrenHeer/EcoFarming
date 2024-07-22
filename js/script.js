$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.burger_button, .burger_close, .burger a').click(() => {
        $('.burger').toggleClass('show');
    });
    if (document.querySelector('.burger') != null) {
        modal('.burger_button', 'data-close', '.burger');
    }
});
$.get('footer.html',function(response){ 
    $('.footer').html(response); 
});

window.onscroll = function() {
    let header = document.querySelector(".header_main .container");
    window.scrollY > 200 ? header.classList.add('blur') : header.classList.remove('blur');
}

if (document.querySelector('.weather_slider') != null)
slider({
    containerSelector: '.weather_slider',
    slideSelector: '.weather_slide',
    nextSlideSelector: '.weather_next',
    prevSlideSelector: '.weather_prev',
    wrapperSelector: '.weather_slider',
    fieldSelector: '.weather_field',
    indicatorsClass: 'weather_indicators',
    swipe: true,
});
