import {petsCard} from "./petsCard.js";

export function renderElement() {
  for (let i = 0; i <= petsCard.length; i++) {
    const myObject = petsCard[i];
    let imageContainer = document.createElement('div');
    let petsContainer= document.querySelectorAll('.container-img-our-friends');
    petsContainer.forEach((item) => item.append(imageContainer))
    let imagePets = document.createElement('img');
    let petsName = document.createElement('h3');
    let btnLearnMore = document.createElement('button');
    imageContainer.className ='img-card-container';
    imageContainer.append(imagePets,petsName,btnLearnMore);
    btnLearnMore.className = 'btn-learn-more';
    btnLearnMore.innerText = 'Learn more';
    imagePets.className = 'img-card-our-friends';
    petsName.className = 'name-image';
    if (typeof myObject !== 'undefined' && myObject !== null &&
      myObject.hasOwnProperty('name') && myObject.hasOwnProperty('image')) {
        let imagHref = myObject.image;
        imagePets.setAttribute('src', imagHref)
        petsName.innerHTML = myObject.name;
    }
    
  }
}

