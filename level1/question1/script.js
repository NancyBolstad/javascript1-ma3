//Use RegEx to validate form

function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var phoneRegex = /^([0-9]{8})$/;

    //Validate that 'name' and 'last name' inputs are not empty 
    if (firstName == "" || firstName == null) {
        document.getElementById("msg").innerHTML = "First name cannot be empty.";
        document.getElementById("first-name").focus();
        return false;
    } 

    if (lastName == "" || lastName == null) {
        document.getElementById("msg").innerHTML = "Last name cannot be empty.";
        document.getElementById("last-name").focus();
        return false;
    }

    //use regex expressions to validate the telephone and email addresses respectively.   
    if (emailRegex.test(email) == false) {
        document.getElementById("msg").innerHTML = "Please type in a correct email address";
        document.getElementById("email").focus();
        return false;
    }  
    
    if (phoneRegex.test(phone) == false) {
        document.getElementById("msg").innerHTML = "Please type in a correct Norwegian phone number consisted of 8 digits.";
        document.getElementById("phone").focus();
        return false;
    } 

        alert("Contact information is validated. The form will be submitted to server now.");
        return true;
    }