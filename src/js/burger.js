//burger menu
let burgerButton = document.querySelector('.burger-container');
let navContainer = document.querySelector('#navigation-container');
let navElements = document.querySelector('#nav-elements');
let count = 0;
burgerButton.addEventListener('click', activeBurger);

export function activeBurger() {
  navContainer.classList.toggle('nav-links-section-mobile');
  navContainer.classList.toggle('nav-links-section');
  navElements.classList.toggle('nav-links-mobile');
  navElements.classList.toggle('nav-links');
  burgerButton.classList.toggle('burger-rotate');
}
