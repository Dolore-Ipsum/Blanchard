
window.addEventListener('DOMContentLoaded', function() {

  // Burger and Search

  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('.header__top-nav').classList.toggle('burger-is-active')
  })

  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('.header__link').classList.toggle('burger-is-active')
  })

  document.querySelector('#search').addEventListener('click', function(){
    document.querySelector('.header__list').classList.toggle('search-is-active')
  })


// SimpleBar


new SimpleBar(document.getElementById('scroll'), {
  autoHide: false,
  scrollbarMaxSize: 35
});

new SimpleBar(document.getElementById('scroll-2'), {
  autoHide: false,
  scrollbarMaxSize: 35
});

new SimpleBar(document.getElementById('scroll-3'), {
  autoHide: false,
  scrollbarMaxSize: 35
});

new SimpleBar(document.getElementById('scroll-4'), {
  autoHide: false,
  scrollbarMaxSize: 35
});

new SimpleBar(document.getElementById('scroll-5'), {
  autoHide: false,
  scrollbarMaxSize: 35
});


  // Select gallery

  const element = document.querySelector('#filter');
  const choises = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
  });

  // Swiper 

  var mySwiper = new Swiper('.swiper__gallery', {
    slidesPerColumnFill: 'row',
    watchSlidesVisibility: true,
  watchSlidesProgress: true,
  observer: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
      },

      321: {
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 26,
        grabCursor: true,
      },

      710: {
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },

      769: {
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 36,
        slidesPerColumnFill: 'row-reverse',
      },
      
      959: {
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerColumnFill: 'row-reverse',
      },

      1392: {
        slidesPerColumn: 2,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 51,
      },
      
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination.pagination__gallery',
      clickable: 'true',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },

    preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  })

  // Smooth transition

  $(document).ready(function(){
    $(document).on("click",".transition", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

  // Tabs


$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
    
    $('.tab__list').on('click',function (e) {
    // let tabItem = $('div.' + e.target.className)[0];
    $('.wrap').children().fadeOut(500, "linear");
    $(tabItem).fadeIn('slow');

   });
  });

  $('.tab__item:nth-child(3)').addClass('tab__is-focused');

  $('.tab__item').click(function() {  
    $(this).siblings().removeClass('tab__is-focused');
    $(this).addClass('tab__is-focused');
});

// Tabs + Accordion

$('#first-tab').click(function() {  
  $('.catalog__info').siblings().removeClass('catalog__info_is-active');
  $('#frenchAccordeon').addClass('catalog__info_is-active');
});

$('#second-tab').click(function() {  
  $('.catalog__info').siblings().removeClass('catalog__info_is-active');
  $('#deutchAccordeon').addClass('catalog__info_is-active');
});

$('#third-tab').click(function() {  
  $('.catalog__info').siblings().removeClass('catalog__info_is-active');
  $('#italyAccordeon').addClass('catalog__info_is-active');
});

$('#fourth-tab').click(function() {  
  $('.catalog__info').siblings().removeClass('catalog__info_is-active');
  $('#russianAccordeon').addClass('catalog__info_is-active');
});

$('#fifth-tab').click(function() {  
  $('.catalog__info').siblings().removeClass('catalog__info_is-active');
  $('#belgiumAccordeon').addClass('catalog__info_is-active');
});


  // Accordion

$( function() {
  $( "#accordion").accordion();
});


$( ".selector" ).accordion({
  active: 0
});

var collapsible = $( ".selector" ).accordion( "option", "collapsible");

// Setter
$( ".selector" ).accordion( "option", "collapsible", true);

$( ".selector" ).accordion({
  animate: 50
});

// Getter
var animate = $( ".selector" ).accordion( "option", "animate" );

// Setter
$( ".selector" ).accordion( "option", "animate", 50 );

})

// catalog

$('#fourth-tab').click(function() {  
  $('#rublevBtn').addClass('catalog__btn_is-active');
  $('#rublev').addClass('specification_is-active');
  $('.catalog__block-1+.ui-accordion-content').addClass('catalog__block_is-active');
});

$('#accordion .catalog__block').click(function() {  
  $(this).siblings().removeClass('catalog__block_is-active');
});

$('#fourth-tab').click(function() {  
  $('#rublevBtn').addClass('catalog__btn_is-active');
  $('#rublev').addClass('specification_is-active');
});

$('#rublevBtn').addClass('catalog__btn_is-active');

$('.catalog__btn').click(function() {  
  $('.catalog__btn').not(this).removeClass('catalog__btn_is-active');
  $(this).toggleClass('catalog__btn_is-active');
});

$('#rublev').addClass('specification_is-active');

$('#rublevBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#rublev').addClass('specification_is-active');
});

$('#cherniyBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#cherniy').addClass('specification_is-active');
});

$('#prohorBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#prohor').addClass('specification_is-active');
});

// italy  accordeon

$('#third-tab').click(function() {  
  $('#girlandayoBtn').addClass('catalog__btn_is-active');
  $('#girlandayo').addClass('specification_is-active');
  $('.catalog__block-2+.ui-accordion-content').addClass('catalog__block_is-active');
});

$('#accordion-2 .catalog__block').click(function() {  
  $(this).siblings().removeClass('catalog__block_is-active');
});


$('#girlandayoBtn').addClass('catalog__btn_is-active');

$('.catalog__btn-2').click(function() {  
  $('.catalog__btn-2').not(this).removeClass('catalog__btn_is-active');
  $(this).toggleClass('catalog__btn_is-active');
});

$('#girlandayo').addClass('specification_is-active');

$('#girlandayoBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#girlandayo').addClass('specification_is-active');
});

$('#verokioBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#verokio').addClass('specification_is-active');
});

$('#vekketaBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#vekketa').addClass('specification_is-active');
});

// french  accordeon

$('#first-tab').click(function() {  
  $('#angerranBtn').addClass('catalog__btn_is-active');
  $('#angerran').addClass('specification_is-active');
  $('.catalog__block-3+.ui-accordion-content').addClass('catalog__block_is-active');
});

$('#accordion-3 .catalog__block').click(function() {  
  $(this).siblings().removeClass('catalog__block_is-active');
});

$('#angerranBtn').addClass('catalog__btn_is-active');

$('.catalog__btn-3').click(function() {  
  $('.catalog__btn-3').not(this).removeClass('catalog__btn_is-active');
  $(this).toggleClass('catalog__btn_is-active');
});

$('#angerran').addClass('specification_is-active');

$('#angerranBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#angerran').addClass('specification_is-active');
});

$('#ivernyBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#iverny').addClass('specification_is-active');
});

$('#eikBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#eik').addClass('specification_is-active');
});

// deutch accordeon

$('#second-tab').click(function() {  
  $('#volgemutBtn').addClass('catalog__btn_is-active');
  $('#volgemut').addClass('specification_is-active');
  $('.catalog__block-4+.ui-accordion-content').addClass('catalog__block_is-active');
});

$('#accordion-4 .catalog__block').click(function() {  
  $(this).siblings().removeClass('catalog__block_is-active');
});

$('#volgemutBtn').addClass('catalog__btn_is-active');

$('.catalog__btn-4').click(function() {  
  $('.catalog__btn-4').not(this).removeClass('catalog__btn_is-active');
  $(this).toggleClass('catalog__btn_is-active');
});

$('#volgemut').addClass('specification_is-active');

$('#volgemutBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#volgemut').addClass('specification_is-active');
});

$('#bertramBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#bertram').addClass('specification_is-active');
});

$('#golbeinBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#golbein').addClass('specification_is-active');
});

// belgium accordeon

$('#fifth-tab').click(function() {  
  $('#dareBtn').addClass('catalog__btn_is-active');
  $('#dare').addClass('specification_is-active');
  $('.catalog__block-5+.ui-accordion-content').addClass('catalog__block_is-active');
});

$('#accordion-5 .catalog__block').click(function() {  
  $(this).siblings().removeClass('catalog__block_is-active');
});

$('#dareBtn').addClass('catalog__btn_is-active');

$('.catalog__btn-5').click(function() {  
  $('.catalog__btn-5').not(this).removeClass('catalog__btn_is-active');
  $(this).toggleClass('catalog__btn_is-active');
});

$('#dare').addClass('specification_is-active');

$('#dareBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#dare').addClass('specification_is-active');
});

$('#vanEikBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#vanEik').addClass('specification_is-active');
});

$('#bruderlamBtn').click(function() {  
  $('.catalog__discription').siblings().removeClass('specification_is-active');
  $('#bruderlam').addClass('specification_is-active');
});

// swiperEvents

var swiperEvents = new Swiper('.swiper__events', {
  grabCursor: false,
  spaceBetween: 10,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  grabCursor: false,
  observer: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      grabCursor: true,
      spaceBetween: 25,
    },
    326: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      grabCursor: true,
      spaceBetween: 19,
    },
    710: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      grabCursor: true,
    },
    
  },
  pagination: {
    el: '.swiper-pagination.pagination__events',
    clickable: 'true'
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  
  observer: true,  
  observeParents: true,
  callback: true,

  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  
});


// Events

document.querySelector('#eventsBtn').addEventListener('click', function(){
  document.querySelectorAll('.events_active').forEach(function(el){
    el.classList.add('swiper-slide__events_is-active')
  })
})

document.querySelector('#eventsBtn').addEventListener('click', function(){
  document.querySelector('.swiper__events').classList.add('events_is-active')
})

document.querySelector('#eventsBtn').addEventListener('click', function(){
  document.querySelector('#eventsBtn').classList.add('tab')
})

// editions

document.querySelector('#checkbox').addEventListener('click', function(){
  document.querySelector('#checkbox').classList.remove('checkbox_is-active')
})

document.querySelectorAll('.checkbox__text').forEach(function(ele) {
  ele.addEventListener('click', function(event) {
    event.target.classList.toggle('checkbox__text_is-active')
  })
})

document.querySelector('#spoiler1').addEventListener('click', function(){
  document.querySelector('.features__spoiler').classList.toggle('spoiler_is-active')
})

document.querySelector('#spoiler1').addEventListener('click', function(){
  document.querySelector('.editions').classList.toggle('editions__height-is-active')
})


$(".bestsellers").on("click", function() {
  $(".bestsellers")
      .addClass("custom-checkbox_is-active");
});

$(".art").on("click", function() {
  $(".art")
      .addClass("custom-checkbox_is-active");
});

$(".archi").on("click", function() {
  $(".archi")
      .addClass("custom-checkbox_is-active");
});

$(".fashion").on("click", function() {
  $(".fashion")
      .addClass("custom-checkbox_is-active");
});

$(".kids").on("click", function() {
  $(".kids")
      .addClass("custom-checkbox_is-active");
});

$(".literature").on("click", function() {
  $(".literature")
      .addClass("custom-checkbox_is-active");
});

$(".publish").on("click", function() {
  $(".publish")
      .addClass("custom-checkbox_is-active");
});

$(".trip").on("click", function() {
  $(".trip")
      .addClass("custom-checkbox_is-active");
});

$(".philosophy").on("click", function() {
  $(".philosophy")
      .addClass("custom-checkbox_is-active");
});

$(".learning").on("click", function() {
  $(".learning")
      .addClass("custom-checkbox_is-active");
});

$(".periodical").on("click", function() {
  $(".periodical")
      .addClass("custom-checkbox_is-active");
});

$(".btn-bestsellers").on("click", function() {
  $(".bestsellers")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-art").on("click", function() {
  $(".art")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-archi").on("click", function() {
  $(".archi")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-disign").on("click", function() {
  $(".disign")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-fashion").on("click", function() {
  $(".fashion")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-kids").on("click", function() {
  $(".kids")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-literature").on("click", function() {
  $(".literature")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-publish").on("click", function() {
  $(".publish")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-trip").on("click", function() {
  $(".trip")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-philosophy").on("click", function() {
  $(".philosophy")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-learning").on("click", function() {
  $(".learning")
      .addClass("custom-checkbox_is-notactive")
});

$(".btn-periodical").on("click", function() {
  $(".periodical")
      .addClass("custom-checkbox_is-notactive")
});

$('#spoiler1').click(function() {  
  $('.custom-checkbox').not(this).removeClass('custom-checkbox_is-notactive');
  $(this).toggleClass('custom-checkbox_is-notactive');
});

document.querySelector('.editions__btn-close').addEventListener('click', function(){
  document.querySelectorAll('.custom-checkbox').forEach(function(elbtn){
    elbtn.classList.remove('custom-checkbox_is-active')
  })
})

var swiperEditions = new Swiper('.swiper__editions', {
  grabCursor: true,
  observer: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerColumn: 4,
      slidesPerGroup: 2,
      grabCursor: false,
      touchRatio: 0,
    },

    710: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 38,
      grabCursor: true,
    },

    958: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 19,
      grabCursor: true,
      
    },

    1350: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 11,
      grabCursor: true,
    },
  
    1919: {
      slidesPerView: 3,
      
      slidesPerGroup: 3,
      spaceBetween: -1600,
      grabCursor: true,
    },
    
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination.pagination__editions',
    clickable: 'true',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next__editions',
    prevEl: '.swiper-button-prev__editions',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  autoheight: true,
  
 
  
});

var swiperProjects = new Swiper('.swiper__projects-container', {
  grabCursor: true,
  observer: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
      grabCursor: true,
    },

     710: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grabCursor: true,
    },

    958: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      grabCursor: true,
      
    },

    1025: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 73,
      grabCursor: true,
    },

    1391: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48,
      grabCursor: true,
    },
  
    1919: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 46,
      grabCursor: true,
    },
    
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination.pagination__projects',
    clickable: 'true',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next__projects',
    prevEl: '.swiper-button-prev__projects',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  autoheight: true,

});

// Валидация форм

new window.JustValidate('.contacts__callback-form');

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


new JustValidate('.contacts__callback-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      minLength: 'Поле должно содержать не менее двух символов',
      required: 'Как вас зовут?'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Номер введён неверно'
    },
    focusWrongField: true,
  },
});

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758542, 37.5988043,17],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

                // Создание геообъекта с типом точка (метка).
        // var myGeoObject = new ymaps.GeoObject({
        //   geometry: {
        //       type: "Point", // тип геометрии - точка
        //       coordinates: [55.8, 37.8] // координаты точки
        //   }
        // });

        var myPlacemark = new ymaps.Placemark([48.872197, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/mdi_location_on.png',
          iconImageSize: [48, 48],
          iconImageOffset: [-3, -42]
      });

        // Размещение геообъекта на карте.
        // myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
            }


});