document.addEventListener('DOMContentLoaded', () => {

  if (sessionStorage.getItem('enteredList')) {
    const savedList = document.getElementById('fullGrid');
    savedList.innerHTML = sessionStorage.getItem('enteredList');
  }

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
  const getList = document.querySelector("#fullGrid");
  sessionStorage.setItem('enteredList', getList.innerHTML);
  event.target.reset();
}

const createNew = function (form) {

  const newForm = document.createElement('li');
  newForm.classList.add('cell');

  const beach = document.createElement('h2');
  beach.textContent = form.beach.value;
  newForm.appendChild(beach);

  const resort = document.createElement('h3');
  resort.textContent = form.resort.value;
  newForm.appendChild(resort);

  const country = document.createElement('h4');
  country.textContent = form.country.value;
  newForm.appendChild(country);

  const rank = document.createElement('h5');
  rank.textContent = form.rank.value;
  newForm.appendChild(rank);

  return newForm;
}

const handleDelete = function (event) {
  const beachList = document.querySelector('#beach-list');
  beachList.innerHTML = "";
  sessionStorage.clear();
}

function hideForm() {
  const fullForm = document.getElementById("fullForm");
  if (fullForm.style.display === "none") {
    fullForm.style.display = "block";
  } else {
    fullForm.style.display = "none";
  }
}

function onoff(){
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "VIEW"){
    document.getElementById("onoff").value="HIDE";
  }else{
    document.getElementById("onoff").value="VIEW";
  }
}

function deleteAll() {
  alert('List Deleted!')
}

$(document).ready(function () {
  $("#onoff").click( function () {
    $("#airplane").animate({width: '0px'}, 7500);
  });
});
