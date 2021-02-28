
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

  // Select gallery

  const element = document.querySelector('#filter');
  const choises = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
  });

  // Swiper 

  var mySwiper = new Swiper('.swiper__gallery', {
    grabCursor: true,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    slidesPerColumnFill: 'column-reverse',
    spaceBetween: 30,
    // loop: true,
    observer: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 26,
        grabCursor: true,
      },
      // when window width is >= 710px
      710: {
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      // when window width is <= 1392px
      1392: {
        slidesPerColumn: 2,
        slidesPerView: 3,
        slidesPerGroup: 3,
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

  
  })

  // Smooth transition

  $(document).ready(function(){
    $(document).on("click",".header__nav-link", function (event) {
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

  $('.tab__item:nth-child(4)').addClass('tab__is-focused');

  $('.tab__item').click(function() {  
    $(this).siblings().removeClass('tab__is-focused');
    $(this).addClass('tab__is-focused');
});


  // Accordion

$( function() {
  $( "#accordion" ).accordion();
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

$('#girlandayoBtn').addClass('catalog__btn_is-active');

$('.catalog__btn').click(function() {  
  $('.catalog__btn').not(this).removeClass('catalog__btn_is-active');
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

var swiperEvents = new Swiper('.swiper__events', {
  grabCursor: false,
  spaceBetween: 10,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  grabCursor: false,
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
      grabCursor: false,
    },
    
  },
  pagination: {
    el: '.swiper-pagination.pagination__events',
    clickable: 'true'
  },
  
  observer: true,  
  observeParents: true,
  callback: true,

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true
  
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
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerColumn: 4,
      slidesPerGroup: 2,
      grabCursor: false,
    },

    710: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 28,
      grabCursor: true,
    },

    958: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 12,
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
      slidesPerColumn: 1,
      slidesPerGroup: 3,
      spaceBetween: 49,
      grabCursor: true
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

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true
 
  
});

});