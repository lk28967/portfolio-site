// Set variables for required fields and form

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

// Code Challenge #1: Leverage inline validation so that the user
// does not have to click the submit button in order to receive feedback.
// Hint: Consider the event type

function checkValues() {
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let phoneValue = phone.value;
    let messageValue = message.value;

    let fNameError = document.querySelector(".fname-error");
    let emailError = document.querySelector(".email-error");
    let phoneError = document.querySelector(".phone-error");
    let messageError = document.querySelector(".message-error");

    // Insert your code here

    // If the value of the firstname field is empty, the field's background
    // color should change and the error message should display:
    // Property hints: style, innerText

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

    // If the value of the firstname field is not empty, the field's background
    // color should return to white and the error message should return
    // to empty.

    // First name logic

    // Email Logic
    // Code Challenge #2: use the pattern attribute to ensure that the 
    // user inputs a valid email address.

    // Message Logic



    /* Patterns 

    Date Regular Expression: pattern="\d{1,2}/\d{1,2}/\d{4}"
    Email Regular Expression: pattern="^.+@.+$"
    URL Regular Expression: pattern="https?://.+"
    
    */
}