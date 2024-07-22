$.get('footer.html',function(response){ 
    $('.footer').html(response); 
});

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
