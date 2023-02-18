import {petsCard} from "./petsCard.js";
import {activeBurger} from "./burger.js";
import {renderElement} from"./slideCard";
import {iconClose,openModal, animalCard,createModalWindowCard} from "./modal.js";

renderElement()


const btnLearn = document.querySelectorAll('.btn-learn-more');
btnLearn.forEach( (button, index) => {button.addEventListener('click', () => {
  createModalWindowCard(index)
  animalCard.style.display = 'flex';}
)})







