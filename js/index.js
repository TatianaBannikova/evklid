//  slider -- section -- hero
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },


});

// tabs - section -- work
let tabsBtn = document.querySelectorAll('.work__tab');
let tabsItem = document.querySelectorAll('.slider__content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function(btn) {
      btn.classList.remove('tabs__btn--active')
    });

    tabsItem.forEach(function(element) {
      element.classList.remove('tabs--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs--active');

  });
});
// burger-menu
let burger = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let menuLinks = menu.querySelectorAll("nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("nav--active");
  document.body.classList.toggle("stop-scroll");
});
menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("nav--active");
    document.body.classList.remove("stop-scroll");
  });
});
// accordion
new Accordion('.accordion-container');


// search-form
let search = document.querySelector('.header__form');
let button = document.querySelector('.header__search');

button.addEventListener('click', function (e) {
  e.stopPropagation();
  search.classList.add('search--active');
  button.classList.add('search--none');
});
document.body.addEventListener('click', function () {
  search.classList.remove('search--active');
  button.classList.remove('search--none');
});
