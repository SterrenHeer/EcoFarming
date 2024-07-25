$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.header_buttons img, .burger_close, .burger a').click(() => {
        $('.burger').toggleClass('show');
    });
    if (document.querySelector('.burger') != null) {
        modal('.burger_button', 'data-close', '.burger');
    }
    if (location.pathname.includes('index')) {
		document.querySelector('.main').style.display = 'block';
    } else if (location.pathname.includes('products') || location.pathname.includes('cultures') || location.pathname.includes('harmful')) {
        document.querySelector('.others.all').style.display = 'flex';
    } else if (location.pathname.includes('weed')) {
        document.querySelector('.others.harmful').style.display = 'flex';
    } else if (location.pathname.includes('contacts') || location.pathname.includes('publication')) {
        document.querySelector('.others.company').style.display = 'flex';
    } else {
        document.querySelector('.others.products').style.display = 'flex';
    }
    window.onscroll = function() {
        let header = document.querySelector(".header_main .container");
        window.scrollY > 200 ? header.classList.add('blur') : header.classList.remove('blur');
    }
});
$.get('footer.html',function(response){ 
    $('.footer').html(response); 
});

$('.brand_others img, .brand_items a').click(() => {
    $('.brand_items').toggleClass('flex');
});
$('.weeds_others img, .weeds_links a').click(() => {
    $('.weeds_links').toggleClass('flex');
});
$('.publications_others img, .publications_links a').click(() => {
    $('.publications_links').toggleClass('flex');
});
$(window).on( "resize, scroll", () => {
    $('.brand_items').removeClass("flex")
    $('.weeds_links').removeClass("flex")
});

if (document.querySelector('.weather_slider') != null) {
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
}
if (document.querySelector('.weeds_slider') != null) {
    slider({
        containerSelector: '.weeds_descr_images_bottom',
        slideSelector: '.weeds_slide',
        nextSlideSelector: '.weeds_next',
        prevSlideSelector: '.weeds_prev',
        wrapperSelector: '.weeds_slider',
        fieldSelector: '.weeds_field',
        elementsPerPage: 2, 
        elementsPerPageMobile: 2,
        columnGap: 0.937,
        swipe: true,
    });

    let bottom_images = document.querySelectorAll('.weeds_slide img');

    bottom_images.forEach(image => {
        image.addEventListener('click', (e) => {
            let main_image = document.querySelector('.main_image');
            main_image.setAttribute('src', image.getAttribute('src'))
        });
    }); 
}

if (document.querySelector('.publications_slider') != null) {
    slider({
        containerSelector: '.publications_wrapper',
        slideSelector: '.publications_slide',
        wrapperSelector: '.publications_slider',
        fieldSelector: '.publications_field',
        indicatorsClass: 'publications_indicators',
        swipe: true,
    });
}

if (document.querySelector('.brand_tab') != null) {
    tabs('.brand_header', '.brand_tab', '.brand_headers', 'brand_tab_active');
}
if (document.querySelector('.culture_tab') != null) {
    tabs('.culture_header', '.culture_tab', '.culture_headers', 'culture_tab_active');
}
