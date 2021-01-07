
window.addEventListener('DOMContentLoaded', function() {
  
                            // Scroll-block                              

  document.querySelector('.header__list-items:first-child').addEventListener('click', function(){
    document.querySelector('#scroll').classList.toggle('is-active')
  })

  document.querySelector('.header__list-items:nth-child(2)').addEventListener('click', function(){
    document.querySelector('#scroll-2').classList.toggle('is-active')
  })

  document.querySelector('.header__list-items:nth-child(3)').addEventListener('click', function(){
    document.querySelector('#scroll-3').classList.toggle('is-active')
  })

  document.querySelector('.header__list-items:nth-child(4)').addEventListener('click', function(){
    document.querySelector('#scroll-4').classList.toggle('is-active')
  })

  document.querySelector('.header__list-items:last-child').addEventListener('click', function(){
    document.querySelector('#scroll-5').classList.toggle('is-active')
  })


                              // Scroll-element

  document.querySelector('.header__list-items:first-child').addEventListener('click', function(){
    document.querySelector('.simplebar-vertical').classList.toggle('background-active')
  })

  document.querySelector('.header__list-items:nth-child(2)').addEventListener('click', function(){
    document.querySelector('#scroll-2 .simplebar-vertical').classList.toggle('background-active')
  })

  document.querySelector('.header__list-items:nth-child(3)').addEventListener('click', function(){
    document.querySelector('#scroll-3 .simplebar-vertical').classList.toggle('background-active')
  })

  document.querySelector('.header__list-items:nth-child(4)').addEventListener('click', function(){
    document.querySelector('#scroll-4 .simplebar-vertical').classList.toggle('background-active')
  })

  document.querySelector('.header__list-items:last-child').addEventListener('click', function(){
    document.querySelector('#scroll-5 .simplebar-vertical').classList.toggle('background-active')
  })

                                // Burger and Search

  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('.header__top-nav').classList.toggle('burger-is-active')
  })

  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('.header__top-link').classList.toggle('burger-is-active')
  })

  document.querySelector('#search').addEventListener('click', function(){
    document.querySelector('.header__list').classList.toggle('search-is-active')
  })

})
