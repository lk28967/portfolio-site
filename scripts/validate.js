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
        alert("Thanks! I'll get back to you as soon as possible!");
    } 
   
});

//name missing

fullName.addEventListener("blur", () => {
    let fullNameValue = fullName.value;
    let fNameError = document.querySelector(".fname-error");

    if(fullNameValue == "") {
        fullName.style.outline = "3px solid #bcb2e1";
        fNameError.innerText = "Please enter your name.";
    } else if((fullNameValue !== "") && (fNameError.innerText !== "")) {
        fullName.style.outline = "";
        fNameError.innerText = "";
    }
})

// email missing

email.addEventListener("blur", () => {
    let emailValue = email.value;
    let emailError = document.querySelector(".email-error");

    if(emailValue == "") {
        email.style.outline = "3px solid #bcb2e1";
        emailError.innerText = "Please enter a valid email address.";
    } else if((emailValue !== "") && (emailError.innerText !== "")) {
        email.style.outline = "";
        emailError.innerText = "";
    }


// email invalid

    let regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(emailValue.match(regExp)) {
        email.style.outline = "";
        emailError.innerText = "";
    } else  {
        email.style.outline = "3px solid #bcb2e1";
        emailError.innerText = "Please enter a valid email address.";
    }

})

// phone missing

phone.addEventListener("blur", () => {
    let phoneValue = phone.value;
    let phoneError = document.querySelector(".phone-error");

    if(phoneValue == "") {
        phone.style.outline = "3px solid #bcb2e1";
        phoneError.innerText = "Please provide a valid phone number.";
    } else if((phoneValue !== "") && (phoneError.innerText !== "")) {
        phone.style.outline = "";
        phoneError.innerText = "";
    }

//phone invalid

    let regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if(phoneValue.match(regExp)) {
        phone.style.outline = "";
        phoneError.innerText = "";
    } else {
        phone.style.outline = "3px solid #bcb2e1";
        phoneError.innerText = "Please provide a valid phone number.";
    }
})

//message missing

message.addEventListener("blur", () => {
    let messageValue = message.value;
    let messageError = document.querySelector(".message-error");

    if(messageValue == "") {
        message.style.outline = "3px solid #bcb2e1";
        messageError.innerText = "Please provide a reason for contact.";
    } else if((messageValue !== "") && (messageError.innerText !== "")) {
        message.style.outline = "";
        messageError.innerText = "";
    }
})

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
        fullName.style.outline = "3px solid #bcb2e1";
        fNameError.innerText = "Please enter your name.";
    } else if((fullNameValue !== "") && (fNameError.innerText !== "")) {
        fullName.style.outline = "";
        fNameError.innerText = "";
    }

    if(emailValue == "") {
        email.style.outline = "3px solid #bcb2e1";
        emailError.innerText = "Please enter your email.";
    } else if((emailValue !== "") && (emailError.innerText !== "")) {
        email.style.outline = "";
        emailError.innerText = "";
    }

    if(phoneValue == "") {
        phone.style.outline = "3px solid #bcb2e1";
        phoneError.innerText = "Please provide a valid phone number.";
    } else if((phoneValue !== "") && (phoneError.innerText !== "")) {
        phone.style.outline = "";
        phoneError.innerText = "";
    }

    if(messageValue == "") {
        message.style.outline = "3px solid #bcb2e1";
        messageError.innerText = "Please provide a reason for contact.";
    } else if((messageValue !== "") && (messageError.innerText !== "")) {
        message.style.outline = "";
        messageError.innerText = "";
    }
}