$('.main-slider').slick({
    dots: true,
    appendDots: ".main-dots",
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.main-slider-arrows',
    prevArrow: '.main-slider-prevArrow',
    nextArrow: '.main-slider-nextArrow'
});


$(document).ready(function () {
    let $slider = $('#main-slider');
    let sliderCounter = document.getElementsByClassName("slider-counter");
    let sliderCounterSum = document.getElementsByClassName("slider-counter-sum");


    let updateSliderCounter = function (slick, currentIndex, nextSlide) {
        let next = nextSlide + 1;
        let allSlides = slick.slideCount;
        $(sliderCounter).text(next);
        $(sliderCounterSum).text(allSlides);


    };
    let sliderCounterSumNew = document.querySelector(".slider-counter-sum");
    if (sliderCounterSumNew !== null){
        sliderCounterSumNew.innerHTML = $("#main-slider").slick("getSlick").slideCount;
    }


    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        updateSliderCounter(slick, currentSlide, nextSlide);

    });
});


const shopList = document.querySelectorAll(".main-shop-list__item");
const shopBlockList = document.querySelectorAll(".main-shops-img-container");

shopList.forEach((el)=>{

    el.addEventListener("mouseover",function (){
        let shopData = this.getAttribute("data-shop");

        shopBlockList.forEach((shopBlockItem)=>{
            let shopBlockData = shopBlockItem.getAttribute("data-shop");
            shopBlockItem.classList.remove("active");
            if(shopData === shopBlockData){
                removeShopActive(shopList);
                shopBlockItem.classList.add("active")
                el.classList.add("active")
                if(el.previousElementSibling !== null){
                    el.previousElementSibling.classList.add("border-none")
                }
            }
        })
    })
})

function removeShopActive(arr){
    arr.forEach((el)=>{
        el.classList.remove("active")
        el.classList.remove("border-none")
    })
}

/* меняем стили шапки добавляя класс */
if(window.innerWidth > 900){
    $(document).scroll(function(e){

        if($(".header").offset().top> 200){
            $(".header").addClass("scroll")
        }else{
            $(".header").removeClass("scroll")
        }

    });
}



/* отображаем поиск */
$('.fast-search-btn').on('click', function () {
    $(".fast-search").addClass("active");
    $('.mobile-menu').removeClass("active");
    $('.burger').removeClass("active");
});

/* проверка на путое поля и добовление результата поиска */
$('.fast-search-input').on('input', function () {
    let msg = $(this).val();

        if (msg !== "") {
            $(".search-result").addClass("active");

        } else {
            $(".search-result").removeClass("active");
        }

});

function removeFastSearch(){
    $(".fast-search").removeClass("active");
    $(".search-result").removeClass("active");
    $('.fast-search-input').val('');
}

/* убираем быстрый поиск и очищаем инпут*/
$('.search-cross').on('click', function () {
    removeFastSearch()
});

/*клик на бургер показывает бургер меню*/
$('.burger').on('click', function () {
    removeFastSearch()
    $('.burger').toggleClass("active");
    $('.mobile-menu').toggleClass("active");
});

/*открытие подменю*/
$('.nav-list__item--submenu > span').on('click', function (event) {

    if ($(this).siblings('.nav-submenu').hasClass("active")) {
        $('.nav-submenu').removeClass('active');
        $("span.is-active").removeClass('is-active');
    } else {
        $('.nav-submenu').removeClass('active');
        $(this).siblings('.nav-submenu').addClass('active');
        $(this).addClass('is-active');
    }
});


$('input, select').styler();


$('.switch-grid').on('click', function () {
    $(".switch-list").removeClass("active");
    $(".list-shops").removeClass("active");
    $(".switch-grid").addClass("active");
    $(".grid-shops").addClass("active");
});

$('.switch-list').on('click', function () {
    $(".switch-grid").removeClass("active");
    $(".grid-shops").removeClass("active");
    $(".switch-list").addClass("active");
    $(".list-shops").addClass("active");
});

$('.news-promotions-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: ".slider-dots",
    appendArrows: '.slider-navigation',
    prevArrow: '.slider-prevArrow',
    nextArrow: '.slider-nextArrow',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});