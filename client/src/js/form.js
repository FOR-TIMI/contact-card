const form = document.getElementById("formToggle");


export const toggleForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
let submitBtnToUpdate = false;
let profileId;


export const clearForm = () => {
  document.getElementById("name").value = ''
  document.getElementById("phone").value = ''
  document.getElementById("email").value = ''
}


// const newContactButton = document.getElementById("new-contact");

// newContactButton.addEventListener('click', toggleForm)

form.addEventListener('submit', event => {
  // Handle data
  event.preventDefault();
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let profile = document.querySelector('input[type="radio"]:checked').value;

  // Post form data to IndexedDB OR Edit an existing card in IndexedDB
if (submitBtnToUpdate == false) {
  postDb(name, email, phone, profile);
} else {

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
});
