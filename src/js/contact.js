const formInput = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const subjectInput = document.querySelector("#subject");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const formMessage = document.querySelector("#message");

      
const regexforName = /^[a-zA-Z]{2,}/;
const regexforSubject = /^(?=.{10,}).+$/;
const regexforEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regexforAddress = /^(?=.{25,}).+$/;

formInput.addEventListener("submit", (event) => {
event.preventDefault();

const nameField = nameInput.value;
const subjectField = subjectInput.value;
const emailField = emailInput.value;
const addressField = addressInput.value;


const NameisValidated = validation(nameInput, regexforName);
const SubjectisValidated = validation(subjectInput, regexforSubject);
const EmailisValidated = validation(emailInput, regexforEmail);
const AddressisValidated = validation(addressInput, regexforAddress);



formMessage.innerHTML = "";

if (!NameisValidated) {
  alert("Enter a name");
  return;
}

if (!SubjectisValidated) {
  alert("Subject must have at least 10 characters");
  return;
}

if (!EmailisValidated) {
  alert("Enter a valid email");
  return;
}

if (!AddressisValidated) {
  alert("Address must have at least 25 characters");
  return;
}

submitContactForm(nameField, subjectField, emailField, addressField);
});

const nameValidation = () => validation(event.target, regexforName);

nameInput.addEventListener("input", nameValidation);
nameInput.addEventListener("blur", nameValidation);

const subjectValidation = () => validation(event.target, regexforSubject);

subjectInput.addEventListener("input", subjectValidation);
subjectInput.addEventListener("blur", subjectValidation);

const emailValidation = () => validation(event.target, regexforEmail);

emailInput.addEventListener("input", emailValidation);
emailInput.addEventListener("blur", emailValidation);

const addressValidation = () => validation(event.target, regexforAddress);

addressInput.addEventListener("input", addressValidation);
addressInput.addEventListener("blur", addressValidation);

function validation(inputField, regexValue, errorMessage) {
  const validValue = inputField.value.trim();
  const messagevalidateInput = inputField.parentNode.querySelector("[data-id]");
  
  if (regexValue.test(validValue) && validValue !== "") {
    inputField.classList.add("successfull");
    inputField.classList.remove("error-occurred");
    
    displayErrorMessage(messagevalidateInput);
    return true;
  } else {
    inputField.classList.add("error-occurred");
    inputField.classList.remove("successfull");
    
    displayErrorMessage(
      messagevalidateInput,
      errorMessage || "Value is not valid"
      );
      return false;
    }
  }
  
  function displayErrorMessage(container, error = "") {
    container.innerHTML = error;
  }
  
  function formReset() {
    formInput.reset();
    
    nameInput.classList.remove("successfull");
    subjectInput.classList.remove("successfull");
    emailInput.classList.remove("successfull");
    addressInput.classList.remove("successfull");
    
    document.querySelectorAll("[data-id]").forEach((el) => {
      el.innerHTML = "";
    });
  }
  
  async function submitContactForm(nameField, subjectField, emailField, addressField) {
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameField,
          subjectField,
          emailField,
          addressField,
        }),
      });
      
      alert("Form has been submitted");
      const formData = await response.json();
      console.log(formData);
    } catch (error) {
      console.log(error);
      
      displayErrorMessage(formMessage, error);
    } finally {
      formReset();
    }
  }