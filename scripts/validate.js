const form = document.getElementById("contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

// Once the submit button is clicked the following will occur
form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkValues();

    if((fullName.value !== "") && (email.value !== "") && (phone.value !== "") && (message.value !== "")) {
        form.submit();
        console.log("Form Submitted!");
        alert("Form Submitted!");
    } 
   
});

function checkValues() {
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let phoneValue = phone.value;
    let messageValue = message.value;

    let fNameError = document.querySelector(".fname-error");
    let emailError = document.querySelector(".email-error");
    let phoneError = document.querySelector(".phone-error");
    let messageError = document.querySelector(".message-error");

    if(fullNameValue == "") {
        fullName.style.outline = "1.5px solid red";
        fNameError.innerText = "Please enter your name."
    } else if((fullNameValue !== "") && (fNameError.innerText !== "")) {
        fullName.style.outline = "";
        fNameError.innerText = "";
    }

    if(emailValue == "") {
        email.style.outline = "1.5px solid red";
        emailError.innerText = "Please enter your email."
    } else if((emailValue !== "") && (emailError.innerText !== "")) {
        email.style.outline = "";
        emailError.innerText = "";
    }

    if(phoneValue == "") {
        phone.style.outline = "1.5px solid red";
        phoneError.innerText = "Please provide a valid phone number."
    } else if((phoneValue !== "") && (phoneError.innerText !== "")) {
        phone.style.outline = "";
        phoneError.innerText = "";
    }

    if(messageValue == "") {
        message.style.outline = "1.5px solid red";
        messageError.innerText = "Please provide a reason for contact."
    } else if((messageValue !== "") && (messageError.innerText !== "")) {
        message.style.outline = "";
        messageError.innerText = "";
    }
}