document.addEventListener('DOMContentLoaded', () => {

  const newForm = document.querySelector('#beach-form');
  newForm.addEventListener('submit', handleNewForm);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDelete);

});

const handleNewForm = function (event) {

  event.preventDefault();

  const newForm = createNew(event.target);

  const formInput = document.querySelector('#beach-list');
  formInput.appendChild(newForm);

  event.target.reset();
}

const createNew = function (form) {

  const newForm = document.createElement('li');
  newForm.classList.add('cell');

  const beach = document.createElement('h2');
  beach.textContent = form.beach.value;
  newForm.appendChild(beach);

  const city = document.createElement('h3');
  city.textContent = form.city.value;
  newForm.appendChild(city);

  const country = document.createElement('p');
  country.textContent = form.country.value;
  newForm.appendChild(country);

  return newForm;
}

const handleDelete = function (event) {

  const beachList = document.querySelector('#beach-list');
  beachList.innerHTML = "";
  
}
