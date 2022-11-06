
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
import { initdb, getDb, postDb, deleteDb, editDb } from './database';

/** getAll cards */
import { fetchCards} from './card';

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
  let profileId = parseInt(e.dataset.id);

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



