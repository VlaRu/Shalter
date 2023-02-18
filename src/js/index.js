import petsCard from "./petsCard.js";
import {activeBurger} from "./burger.js";
import {iconClose} from "./modal.js";
import {renderElement} from"./slideCard";

renderElement()

/* let containerModal = document.querySelector('.container-modal-window');

function createModalWindowCard(index){
  let imgPetModal, descriptionModal, headingModal, breedModal, descriptionTextModal, descriptionListModal,descriptionListItemModal;
 
  imgPetModal = document.createElement('img');
  imgPetModal.className ='modal-animal-image';
  imgPetModal.setAttribute('src',petsCard[index].image )
 
  descriptionModal = document.createElement('div');
  descriptionModal.className = 'description-container';
  
  containerModal.append(imgPetModal,descriptionModal);
 
  headingModal = document.createElement('h2');
  headingModal.className = 'heading heading-modal';
  headingModal.innerText = petsCard[index].name;
 
  breedModal = document.createElement('h3');
  breedModal.className = 'kind-animal';
  breedModal.innerText = petsCard[index].bread; 
 
  descriptionTextModal = document.createElement('p');
  descriptionTextModal.className = 'description-animal';
  descriptionTextModal.innerText = petsCard[index].description;
 
  descriptionListModal = document.createElement('ul');
  descriptionListModal.className = 'description-list';
  
 
  descriptionModal.append(headingModal,breedModal,descriptionTextModal,descriptionListModal);
  for (let i = 0; i < 5; i++) {
   const textList = ['Age:' ,'Inoculation:', 'Diseases:', 'Parasites:'];
     descriptionListItemModal = document.createElement('li');  
     descriptionListModal.append(descriptionListItemModal)
     for (let j = 0; j < textList.length; j++) {
       descriptionListItemModal.innerText = textList[j];
       descriptionListItemModal.classList = 'description-items';
     }
  }
 } */
// create Card container elements







