
/** Js Files */
import  {clearForm, toggleForm } from "./form";






/** Images */
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

/** CSS */
import "../css/index.css";

/** Bootstrap*/
import {Tooltip, Toast, Popover} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/** IndexDB */
import { initdb, postDb, deleteDb, editDb } from './database';

/** getAll cards */
import { fetchCards} from './card';


// Form functionality
const form = document.getElementById("formToggle");
const newContactButton = document.getElementById("new-contact");
let submitBtnToUpdate = false;
let profileId;

newContactButton.addEventListener('click', toggleForm)


form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;

  // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {

    // Obtains values passed into the form element
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;

   // Calls the editDB function passing in any values from the form element as well as the ID of the contact that we are updating
   editDb(profileId, name, email, phone, profile);

   fetchCards();

   // Toggles the submit button back to POST functionality
   submitBtnToUpdate = false;
  }
  
  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
})

/** Delete cards */
window.deleteCard = (e) => {
   let id = parseInt(e.id);

  // Delete the card
  deleteDb(id);
  // Reload the DOM
  fetchCards();
};

/** Edit cards */
window.editCard = (e) => {
 profileId = parseInt(e.dataset.id);

  let editName = e.dataset.name;
  let editEmail = e.dataset.email;
  let editPhone = e.dataset.phone;

  document.getElementById("name").value = editName;
  document.getElementById("email").value = editEmail;
  document.getElementById("phone").value = editPhone;

  form.style.display = "block";
  // Toggles the submit button so that it now Updates an existing contact instead of posting a new one
  submitBtnToUpdate = true;
}


window.addEventListener('load', function() {
  initdb();
  fetchCards();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});



