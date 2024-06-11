function isValid(event) {
    
    if (firstName() && email() && comments()) {
       
        return true;
}
    else{
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}
document.getElementById("myform").addEventListener('submit', isValid, false);



FirstName.addEventListener('blur', firstName, false);
function firstName(){

    var validFirstname=false;
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };
    document.getElementById("fname").innerHTML = errorMessages;
    return (validFirstname);
};
Email.addEventListener('blur', email, false);
function email() {
    var validEmail=false;
    var errorMessages = "";
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
  errorMessages = "<p>Invalid email</p>";
}
else{
    validEmail = true;
    console.log("Email valid")
}
document.getElementById("em").innerHTML = errorMessages;
return(validEmail)
}
Comments.addEventListener('blur', comments, false);
function comments(){
    var validCom=false;
    var comments_ = document.getElementById("Comments").value;
    var errorMessages = "";
    if (comments_==="null" || comments_==="") {
        errorMessages += "<p>The comments are required</p>";
        console.log("City invalid")
        }    else {
                validCom = true;
                console.log("Comments valid")
        };
    document.getElementById("com").innerHTML = errorMessages;
    return (validCom);
}
