// add a submit event to the form
document.getElementById("form").addEventListener("submit", function(event) {
  // prevent the default submit behaviour
  event.preventDefault();
  
  // get the values of the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;
  
  // expression for the validation of name field
  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
    // update the error message for the name field
  document.getElementById("nameError").innerHTML = "Name can only contain alphabets";
  return false;
  } else {
    // clear the error message for the name field
  document.getElementById("nameError").innerHTML = "";
  }
  
  // expression for validating email field.
  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
  document.getElementById("emailError").innerHTML = "Enter a valid email address";
  return false;
  } else {
  document.getElementById("emailError").innerHTML = "";
  }

  
  // expression for validating the phone number field.
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
  document.getElementById("phoneError").innerHTML = "Phone number must contain 10 numbers only";
  return false;
  } else {
  document.getElementById("phoneError").innerHTML = "";
  }
  
  // expression for validating the feedback field
  const feedbackRegex = /\S/;
  if (!feedbackRegex.test(feedback) || feedback.split(" ").length < 5) {
  document.getElementById("feedbackError").innerHTML = "Feedback must contain at least 5 words";
  return false;
  } else {
  document.getElementById("feedbackError").innerHTML = "";
  }
  
  // show submitted message and reset form
  console.log("Form submitted successfully!!")
  document.getElementById("form").reset();
  });


