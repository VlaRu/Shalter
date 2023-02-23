import {renderElement} from"./slideCard";
renderElement()

const carouselSlide = document.querySelector("#container-for-img");
export const prevButton = document.querySelector(".arrow-left");
export const nextButton = document.querySelector(".arrow-right");
export const prevButtonPets = document.querySelector("#btn-slide-left");
export const nextButtonPets = document.querySelector("#btn-slide-right");

export function nextSlide() {
  nextButton.addEventListener('click', ()=>{
    moveSlideRight()
    console.log('hi');
  })
} 

export function prevSlide() {
  prevButton.addEventListener('click', ()=>{
    moveSlideLeft()
    console.log('hello');
  })
}
export function nextSlidePets() {
  nextButtonPets.addEventListener('click', ()=>{
    console.log('hi');
  })
} 

export function prevSlidePets() {
  prevButtonPets.addEventListener('click', ()=>{
    console.log('hello');
  })
}


function moveSlideRight() {
  const lastImage = carouselSlide.lastElementChild;
  carouselSlide.removeChild(lastImage);
  carouselSlide.insertBefore(lastImage, carouselSlide.firstChild);
}
function moveSlideLeft() {
  const firstImage = carouselSlide.firstElementChild;
  carouselSlide.removeChild(firstImage);
  carouselSlide.appendChild(firstImage);
}

