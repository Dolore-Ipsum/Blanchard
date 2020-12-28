
window.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.header__list-items:first-child').addEventListener('click', function(){
    document.querySelector('#scroll').classList.toggle('is-active')
  })

  document.querySelector('.header__list-items:first-child').addEventListener('click', function(){
    document.querySelector('.simplebar-vertical').classList.toggle('background-active')
  })

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
