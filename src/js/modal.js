//----close when click outside popup/modal------
let animalCard = document.querySelector('.modal-our-friends')

document.addEventListener("click", (event) => {
  if(event.target.classList.contains("btn-cancel") ||event.target.classList.contains("modal-our-friends") ){
    iconClose()
  }
});

export function iconClose() {
  animalCard.style.display = "none";
}

//----open modal window
let allBtnLearn = document.querySelectorAll('.btn-learn-more');

allBtnLearn.forEach((item, index) => { item.addEventListener('click', () => {
    console.log('hi');
    animalCard.style.display = 'flex';
    createModalWindowCard(index)
  }) 
})