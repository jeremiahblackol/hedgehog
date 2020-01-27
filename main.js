var nameInput = document.querySelector('#name-input');
var hogletsInput = document.querySelector('#hog-input');
var allergiesInput = document.querySelector('#allergies-input');
var addButton = document.querySelector('#add-button');
var inviteeSpace = document.querySelector('.add-invitees');

addButton.addEventListener('click', addToList);

function addToList(event){
  inviteeSpace.insertAdjacentHTML('beforeend', `<section class="invitee-rows"><p>${nameInput.value}</p><p>${hogletsInput.value}</p><p>${allergiesInput.value}</p><button class="uninvite-button" type="button">${'UNINVITE'}</button></section>`);
  console.log(nameInput.value);
}
