const form = document.getElementById("formToggle");


const toggleForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

const newContactButton = document.getElementById("new-contact");

newContactButton.addEventListener('click', toggleForm)
