import {petsCard} from "./petsCard.js";
let containerModal = document.querySelector('.modal-our-friends');
let containerModalContent = document.querySelector('.container-modal-window');


//----close when click outside popup/modal------
export let animalCard = document.querySelector('.modal-our-friends');



document.addEventListener("click", (event) => {
  if(event.target.classList.contains("btn-cancel") ||event.target.classList.contains("modal-our-friends") ){
    iconClose()
  }
});

export function iconClose() {
  animalCard.style.display = "none";
  containerModalContent.innerHTML = '';
}


// ---render card pets for modal


export function createModalWindowCard(index){
  let imgPetModal, descriptionModal, headingModal, breedModal, descriptionTextModal, descriptionListModal,descriptionListItemModal;
  containerModal.append(containerModalContent)
  imgPetModal = document.createElement('img');
  imgPetModal.className ='modal-animal-image';
  imgPetModal.setAttribute('src',petsCard[index].image )
 
  descriptionModal = document.createElement('div');
  descriptionModal.className = 'description-container';
  
  containerModalContent.append(imgPetModal,descriptionModal);
 
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
  for (let i = 0; i < 4; i++) {
   const textList = ['Age:' ,'Inoculation:', 'Diseases:', 'Parasites:'];
   let agePets = petsCard[index].age
   let dataListPets = [agePets, 'none', 'none', 'none' ]
     descriptionListItemModal = document.createElement('li');  
     descriptionListModal.append(descriptionListItemModal)
     descriptionListItemModal.innerText = `${textList[i]} ${dataListPets[i]}`;
  }

 }

// create Card container elements