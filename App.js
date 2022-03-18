//Variables
//Sign up
let signUp = document.querySelector(".enregistrement")
let picture = document.getElementById("picture");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let poste = document.getElementById("poste");
let matri = document.getElementById("matri");
let email = document.getElementById("email");
let city = document.getElementById("town");
let button = document.querySelector(".form");
//Business card
let businessCard = document.querySelector(".business-card")
let firstNameContent = document.querySelector(".spanFirstName");
let lastNameContent = document.querySelector(".spanLastName");
let posteContent = document.querySelector(".poste span");
let matriContent = document.querySelector(".numbertMatri")
let emailContent = document.querySelector(".email span");
let cityContent = document.querySelector(".ville span");
console.log(firstNameContent, lastNameContent,posteContent, emailContent, matriContent, cityContent)


// FUNCTION
let submiControler = ()=>{
    //empty inputs after submission the information submission
    firstName.value = "";
    lastName.value = "";
    poste.value = "";
    matri.value = "";
    email.value = "";
    city.value = "";
    // Treatment of the informations
}

button.addEventListener("submit", (e)=>{
    e.preventDefault()
    //Informations affection to the card elementens after the user click on the submit button
    firstNameContent.textContent = firstName.value;
    lastNameContent.textContent = lastName.value;
    posteContent.textContent = poste.value;
    matriContent.textContent = matri.value;
    emailContent.textContent = email.value
    cityContent.textContent = city.value;
    signUp.classList.add("cardAnimation2")
    businessCard.classList.add("cardAnimation1");
    submiControler()
})