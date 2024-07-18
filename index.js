let firstName;
let lastName;
let password;

document.getElementById("submitBtn").onclick = function() {
    firstName = document.getElementById("firstName").value;
    console.log("Your First Name is", firstName);
    document.getElementById("firstNameLabel").innerHTML = "Hello your First Name is " + firstName;

    firstName = document.getElementById("lastName").value;
    console.log("Your Last Name is", firstName);
    document.getElementById("lastNameLabel").innerHTML = "Hello your Last Name is " + firstName;

    firstName = document.getElementById("password").value;
    console.log("Your Password is", firstName);
    document.getElementById("passwordLabel").innerHTML = "Hello your Password is " + firstName;
}