//----close when click outside popup/modal------
let animalCard = document.querySelector('.modal-our-friends')

document.addEventListener("click", (event) => {
  if(event.target.classList.contains("btn-cancel") ||event.target.classList.contains("modal-our-friends") ){
    iconClose()
  }
});

function iconClose() {
  animalCard.style.display = "none";
}