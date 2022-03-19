//Ouvrir la modale
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

//Fermer la modale
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//Ecouter l'événement click du bouton envoyer
const submitButton = document.querySelector('.submit_button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    //Vérifier si les champs ne sont pas vides
    if(lastNameChecked() &&
       firstNameChecked() &&
       emailChecked() &&
       messageChecked()) {
        console.log("Merci pour vore message !");
        const firstName = document.getElementById('first-name');
        console.log(firstName.value);
        const lastName = document.getElementById('last-name');
        console.log(lastName.value);
        const email = document.getElementById('email');
        console.log(email.value);
        const message = document.getElementById('message');
        console.log(message.value);
        closeModal();
    }
});

//Ecouter l'événement click du champ nom
const lastName = document.getElementById('last-name');
lastName.addEventListener('input', lastNameChecked);

//Ecouter l'événement click du champ prénom
const firstName = document.getElementById('first-name');
firstName.addEventListener('input', firstNameChecked);

//Ecouter l'événement click du champ email
const email = document.getElementById('email');
email.addEventListener('input', emailChecked);

//Ecouter l'événement click du champ message
const message = document.getElementById('message');
message.addEventListener('input', messageChecked);


//Fonctions pour Vérifier si les champs ne sont pas vides
function firstNameChecked() {
    const firstName = document.getElementById("first-name");
    const firstNameError = document.getElementById("first-name-error");
    if(firstName.value == "") {
        firstNameError.innerHTML = "Veuillez entrer un prénom svp !";
        firstName.style.border = "1px solid red";
        return false;
    }
    else {
        firstNameError.innerHTML = "";
        firstName.style.border = 'none';
        return true;
    }
}

function lastNameChecked() {
    const lastName = document.getElementById("last-name");
    const lastNameError = document.getElementById("last-name-error");
    if(lastName.value == "") {
        lastNameError.innerHTML = "Veuillez entrer un nom svp !";
        lastName.style.border = "1px solid red";
        return false;
    }
    else {
        lastNameError.innerHTML = "";
        lastName.style.border = 'none';
        return true;
    }
}

function emailChecked() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    if(email.value == "") {
        emailError.innerHTML = "Veuillez entrer un mail svp !";
        email.style.border = "1px solid red";
        return false;
    }
    else {
        emailError.innerHTML = "";
        email.style.border = 'none';
        return true;
    }
}

function messageChecked() {
    const message = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    if(message.value == "") {
        messageError.innerHTML = "Veuillez entrer un message svp !";
        message.style.border = "1px solid red";
        return false;
    }
    else {
        messageError.innerHTML = "";
        message.style.border = 'none';
        return true;
    }
}