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

$(".filter-btn").on("click",function (){
    this.classList.toggle("active");
})

$('select').styler();


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

Fancybox.bind("[data-fancybox]", {});

const gallerySliderBig = document.querySelector(".gallery-slider--big");

if(!gallerySliderBig){
    $('#gallery-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: ".gallery-dots",
        appendArrows: '.gallery-navigation',
        prevArrow: '.gallery-prevArrow',
        nextArrow: '.gallery-nextArrow',
        responsive: [
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
}else{
    $('#gallery-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: ".gallery-dots",
        appendArrows: '.gallery-navigation',
        prevArrow: '.gallery-prevArrow',
        nextArrow: '.gallery-nextArrow',
        responsive: [
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
}



const heightGallerySlider = 276 / 276;
const heightLogoCard = 432 / 243;
const heightBannerCard = 840 / 525;
const heightImgBanner = 1255/461
const heightMap = 1700/1215
function resizeImg(item , heightImg){
    $(item).height($(item).width() / heightImg);
}


resizeImg(".map-content", heightMap);
resizeImg(".gallery-slider__item", heightGallerySlider);
resizeImg(".shop-card-logo__img", heightLogoCard);
resizeImg(".shop-card-sticky-elem", heightBannerCard);
resizeImg(".company-content-img", heightImgBanner);

window.onresize = ()=>{
    resizeImg(".map-content", heightMap);
    resizeImg(".gallery-slider__item", heightGallerySlider);
    resizeImg(".shop-card-logo__img", heightLogoCard);
    resizeImg(".shop-card-sticky-elem", heightBannerCard);
    resizeImg(".company-content-img", heightImgBanner);
}

let x = 100, point;

function zoomPlus(){
   /* x+=0.1;
    point="scale("+x+","+x+")";
    $('.map-content__img').css("transform",point);*/
   /* if(x<1){setTimeout(zoomPlus,1)};*/

    x+=10;
    point = x + "%";
    $('.map-content__img').css("width",point);

    return x
}

function zoomMinus(){
    x-=10;
    /*point="scale("+x+","+x+")";
    $('.map-content__img').css("transform",point);
    if(x>2){setTimeout(zoomMinus,10)};*/

    point = x + "%";
    $('.map-content__img').css("width",point);
    return x
}

$(".map-buttons__plus").on("click",()=>{
    zoomPlus()
})

$(".map-buttons__minus").on("click",()=>{
    zoomMinus()
})

$(".banner-subscribe__btn").on("click",()=>{
    $(".popUp-subscribe").addClass("active");
    $(".substrate").addClass("active")
})

$(".modal-cross").on("click",()=>{
    $(".popUp").removeClass("active");
    $(".substrate").removeClass("active")
})

$(".substrate").on("click",()=>{
    $(".popUp").removeClass("active");
    $(".substrate").removeClass("active")
})

$(".map-btn-floor__item--1").on("click",()=>{
    $(".map-btn-floor__item--2").removeClass("active");
    $(".map-content__img--floor-2").removeClass("active")
    $(".map-btn-floor__item--1").addClass("active");
    $(".map-content__img--floor-1").addClass("active");
})

$(".map-btn-floor__item--2").on("click",()=>{
    $(".map-btn-floor__item--1").removeClass("active");
    $(".map-content__img--floor-1").removeClass("active");
    $(".map-btn-floor__item--2").addClass("active");
    $(".map-content__img--floor-2").addClass("active")
   /* $('.map-content__img').css("transform","scale(1, 1)");*/
})



const questionsList = document.querySelectorAll(".questions-item-header");

if(questionsList !== null){
    questionsList.forEach((el)=>{
        el.addEventListener("click",function (){
            el.classList.toggle("active");
            $(this).siblings().slideToggle( "slow" );
        })
    })
}

$('#big-slider').slick({
    dots: true,
    infinite: true,
   /* autoplay:true,*/
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: ".big-dots",
    appendArrows: '.big-navigation',
    prevArrow: '.big-prevArrow',
    nextArrow: '.big-nextArrow'
});

$('#big-slider').on('afterChange', function(event, slick, currentSlide){
    $('.big-slider-description__item').removeClass("active")
    let listActiveSlide = this.querySelectorAll('.big-slider-description__item[data-slide="'+currentSlide+'"]');
    listActiveSlide.forEach((el)=>{
        el.classList.add("active")
    })

});

$('.big-slider-description__item').on('click', function(){
    let slideNumber = this.getAttribute("data-slide");
    $('#big-slider').slick('slickGoTo', slideNumber,  false);
});

if($('.big-slider-description__item').length > 0){
    const positionDotsSliderBig = $(".slick-active .big-slider-text").offset().left - $("#big-slider").offset().left;
    $(".big-navigation").css("left", positionDotsSliderBig);
}

if($(".company-content").length > 0){
    $(".company-content").css("min-height", $(".company-content-img").height() + "px")
}

$(".flag-list__item a").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 130}, 100);
    return false;
});


$(".hide-btn--map").on('click', function () {
    const parent = this.parentElement;
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
        this.innerHTML = `Скрыть карту 
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.99805L6 0.998047L1 5.99805" stroke="#333333"/>
                            </svg>`;
            $(this).parent().find(".map").fadeIn()
    } else {
        this.innerHTML = `Показать на карте
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.998047L6 5.99805L11 0.998047" stroke="#333333"/>
                    </svg>`;
        $(this).parent().find(".map").fadeOut()
    }
});

$(".hide-btn--text").on('click', function () {
    const parent = this.parentElement;
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
        this.innerHTML = `Свернуть
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.99805L6 0.998047L1 5.99805" stroke="#333333"/>
                            </svg>`;
        $(this).parent().find(".map").fadeIn()
    } else {
        this.innerHTML = `Подробнее
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.998047L6 5.99805L11 0.998047" stroke="#333333"/>
                    </svg>`;
        $(this).parent().find(".map").fadeOut()
    }
});


const listPlaces = document.querySelectorAll(".visit-table-list__item")
const listPlacesContent = document.querySelectorAll(".visit-table-day");

if(listPlaces){
    listPlaces.forEach((el)=>{
      el.addEventListener("click" , function (event){
          $(".visit-table-list__item").removeClass("active");
          this.classList.add("active");
          const dataElem = this.getAttribute("data-place");
          listPlacesContent.forEach((el)=>{
              const dataContent = el.getAttribute("data-visit");
              if(dataElem === dataContent){
                  $(".visit-table-day").removeClass("active");
                  el.classList.add("active")
              }
          })
      })
    })
}

$(".visit-table-mobile__item-header").on('click', function () {
    $(".visit-table-mobile__item-body").fadeOut()
    const parent = this.parentElement;

    if (!parent.classList.contains("active")) {
        $(".visit-table-mobile__item").removeClass("active")
        parent.classList.add("active");
        $(this).parent().find(".visit-table-mobile__item-body").fadeIn()
        setTimeout(()=>{
            const position = $(this).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: position - 130}, 100);
        }, 500)


    }else{
        parent.classList.remove("active");
    }

});

const pipsSlider = document.querySelector('#range-slider');

if(pipsSlider){
    noUiSlider.create(pipsSlider, {
        start: [0],
        range: {
            'min': 0,
            'max': 10
        },

        step: 1,
        pips: {
            mode: 'steps',
            density: 10
        }
    });
}

$("#feedbackFormBtn").on("click",(event)=>{
    event.preventDefault();
    $(".popUp-message").addClass("active");
    $(".substrate").addClass("active");
})

$('#renovation-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: ".renovation-dots",
    appendArrows: '.renovation-navigation',
});


function addActiveDot(currentSlide){
    let listDots = document.querySelectorAll('.renovation-dots li');
    listDots.forEach((el)=>{
        if(el.innerText == currentSlide + 1 ){
            el.classList.add("slick-active")
        }
    })
}

addActiveDot(0)

const renovationNewsBtn = document.querySelectorAll(".renovation-news__item-btn");
const renovationSlideBtnList = document.querySelectorAll(".renovation-slide-more");
const renovationSlideText = document.querySelectorAll(".renovation-slide-number-text");

$('#renovation-slider').on('afterChange', function(event, slick, currentSlide){
    $('.renovation-dots li').removeClass("slick-active")
    let listDots = this.querySelectorAll('.renovation-dots li');

    listDots.forEach((el)=>{
        if(el.innerText == currentSlide + 1 ){
            el.classList.add("slick-active")
        }
    })

    renovationSlideText.forEach((el)=>{
        el.classList.remove("active")
    })

    renovationSlideBtnList.forEach((el)=>{
        let text = `Читать больше  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L6 5.5L11 0.5" stroke="#333333"/>
</svg>
`
        el.innerHTML = text
    })
});

if(renovationNewsBtn){
    renovationNewsBtn.forEach((el)=>{
        el.addEventListener("click",()=>{
            el.classList.toggle("active");
            el.parentElement.querySelector(".renovation-news-text").classList.toggle("active");
        })
    })
}

$(".renovation-plans-btn").on("click",(event)=>{
    let flag = $(".news-list-container").hasClass("active")
  if (flag){
      $(".news-list-container").removeClass("active");
      let text = `Читать больше  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L6 5.5L11 0.5" stroke="#333333"/>
</svg>
`
      $(".renovation-plans-btn").html(text)
  }else{
      let text = `Свернуть <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6.5L6 1.5L1 6.5" stroke="#333333"/>
</svg>
`
      $(".news-list-container").addClass("active");
      $(".renovation-plans-btn").html(text)
  }

})

if(window.innerWidth < 1200){
    if(renovationSlideBtnList){
        renovationSlideText.forEach((el=>{
           if(el.scrollHeight <= el.clientHeight){
               el.parentElement.querySelector(".renovation-slide-more").classList.add("d-none")
           }
        }))
        renovationSlideBtnList.forEach((el)=>{
            el.addEventListener("click", ()=>{
                let flag = el.parentElement.querySelector(".renovation-slide-number-text").classList.contains("active");
                let textContainer = el.parentElement.querySelector(".renovation-slide-number-text");
                if (flag){
                    textContainer.classList.remove("active");
                    let text = `Читать больше  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L6 5.5L11 0.5" stroke="#333333"/>
</svg>
`
                    el.innerHTML = text
                }else{
                    let text = `Свернуть <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6.5L6 1.5L1 6.5" stroke="#333333"/>
</svg>
`
                    textContainer.classList.add("active");
                    el.innerHTML = text
                }

            })
        })
    }
}

if(window.innerWidth < 500){

    $(".renovation-instagram").css({'backgroundImage' : "url(" + $(".renovation-instagram").attr("data-mobile") + ")"});
}

$('a[href^="#"').on("click", function (event) {
    let href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 125
    }, {
        duration: 400,
    });
    return false;
});

const maskPhone = () => {
    $("#phone").mask("+375 (99) 999-99-99");
    $("#rent-phone").mask("+375 (99) 999-99-99");
}

maskPhone()