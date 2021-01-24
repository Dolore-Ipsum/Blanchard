
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

  // Select

  const element = document.querySelector('select');
  const choises = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
  });

  // Swiper 

  var mySwiper = new Swiper('.swiper-container', {
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
      el: '.swiper-pagination',
      clickable: 'true',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  })

  // Smooth transition

  $(document).ready(function(){
    $(document).on("click","a", function (event) {
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

//   tabs

$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
   });
});

})
