function isValid(event) {
    
    if (firstName() && lastName()  && email() && phone() && username() && password() && adress() && city() && state() && country() && zipcode()){// && state() && country() && zipcode()) {
       
        return true;
}
    //return true;
    else{
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}
document.getElementById("myform").addEventListener('submit', isValid, false);

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
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

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};




LastName.addEventListener('blur', lastName, false);

function lastName()
{
//1) Create variable
var validLastname=false;
//2) read value from HTML
var lastname = document.getElementById("LastName").value;
var errorMessages = "";
//3) Do validation
if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
    errorMessages += "<p>The Last name is required and cannot be greater than 50 characters</p>";
    console.log("Last name invalid — length")
    } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last name invalid — bad characters")
    } else {
            validLastname = true;
            console.log("Last name valid")
    };
//4) Send error message to HMTL
document.getElementById("lname").innerHTML = errorMessages;
//5) return status of each field
return (validLastname);
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

PhoneNumber.addEventListener('blur', phone, false);
PhoneNumber.addEventListener('input', formatPhone, false);
function phone() {
    var validPhone = false;
    var errorMessages = "";
var phone = document.getElementById("PhoneNumber").value.replace(/\D/g, '');

if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="" ) {
errorMessages = "<p>Invalid phone number </p>";
}
else{


  validPhone = true; 
  console.log("Phone number valid")
  document.getElementById("PhoneNumber").value = formatPhone(phone);
}
document.getElementById("pnumber").innerHTML = errorMessages;
  return(validPhone)
}
function formatPhone() {
    var input = document.getElementById("PhoneNumber").value.replace(/\D/g, ''); // Remove all non-numeric characters
    var formattedPhone = "";

    // Apply the formatting
    if (input.length <= 10) {
        if (input.length > 6) {
            formattedPhone = input.replace(/(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
        } else if (input.length > 3) {
            formattedPhone = input.replace(/(\d{3})(\d{1,3})/, '$1-$2');
        } else {
            formattedPhone = input;
        }
    } else {
        // Handle international or longer phone numbers
        formattedPhone = input.replace(/(\d{3})(\d{3})(\d{4})(\d{0,})/, '$1-$2-$3');
    }

    document.getElementById("PhoneNumber").value = formattedPhone;
    return formattedPhone;
}

Username.addEventListener('blur', username, false);
function username(){
    //1) Create variable
    var validUsername=false;

    //2) read value from HTML
    var username = document.getElementById("Username").value;
    var errorMessages = "";

    //3) Do validation
    if (username==="null" || username==="" || username.length > 12 ) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
        console.log("Username invalid — length")
        } 
         else {
                validUsername = true;
                console.log("Username valid")
        };

    //4) Send error message to HTML
    document.getElementById("username").innerHTML = errorMessages;

    //5) return status of each field
    return (validUsername);
};
Password.addEventListener('blur', password, false);
function password() {
    var validPassword = false;
    var password = document.getElementById("Password").value;
    var errorMessages="";
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*+=])[A-Za-z\d@#$%^&+=]{1,7}$/;
    if (password==="null" || password==="" || password.length>7) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
        console.log("Password invalid — length")
        } 
        else if (!passwordPattern.test(password)) {
            errorMessages += "<p>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>";
            console.log("Password invalid — pattern");
        }
         else {
                validPassword = true;
                console.log("Password valid")
        };
        document.getElementById("pass").innerHTML = errorMessages;

    //5) return status of each field
    return (validPassword);
    };


Adress.addEventListener('blur', adress, false);
function adress(){
    //1) Create variable
    var validAdress=false;

    //2) read value from HTML
    var adress = document.getElementById("Adress").value;
    var errorMessages = "";

    //3) Do validation
    if (adress==="null" || adress==="") {
        errorMessages += "<p>The adress is required</p>";
        
        } 
        else {
                validAdress = true;
                console.log("Adress valid")
        };

    //4) Send error message to HTML
    document.getElementById("adress").innerHTML = errorMessages;

    //5) return status of each field
    return (validAdress);
};
City.addEventListener('blur', city, false);
function city(){
    //1) Create variable
    var validCity=false;

    //2) read value from HTML
    var city = document.getElementById("City").value;
    var errorMessages = "";

    //3) Do validation
    if (city==="null" || city==="") {
        errorMessages += "<p>The city is required</p>";
        console.log("City invalid")
        } else if (city.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in city (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("City invalid — bad characters")} 
        else {
                validCity = true;
                console.log("City valid")
        };

    //4) Send error message to HTML
    document.getElementById("city").innerHTML = errorMessages;

    //5) return status of each field
    return (validCity);
}
State.addEventListener('blur', state, false);
function state() {
    var validState=false;

    //2) read value from HTML
    var state = document.getElementById("State").value;
    var errorMessages = "";
    if (state ==="") {
       errorMessages += "<p>The state is required</p>";
        console.log("State is required");
        
        } 
        else {
                validState = true;
                console.log("State valid");
        }

    //4) Send error message to HTML
    document.getElementById("state").innerHTML = errorMessages;

    //5) return status of each field
    return validState;
}
Country.addEventListener('blur', country, false);
function country() {
    var validCountry= false;
   var country = document.getElementById("Country").value;
   var errorMessages="";
   if (country ==="") {
    errorMessages += "<p>The country is required</p>";
    console.log("Country is required");
   } 
   else {
    validCountry = true;
    console.log("Country valid");
   }
   document.getElementById("country").innerHTML = errorMessages;
   return validCountry;
}
ZipCode.addEventListener('blur', zipcode, false);
function zipcode() {
    var validZipcode = false;
    var zipcode = document.getElementById("ZipCode").value;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country ==="USA") {
        if (zipcode ==="" || zipcode.length !== 5) {
            errorMessages += "<p>The ZipCode is required and must be exactly 5 digits for the USA</p>";
            console.log("ZipCode is required for the USA");
        }  
        else {
            validZipcode = true; // Validating ZipCode only for the USA
        }
        
    } 
    else {
        validZipcode = true;
    }

    document.getElementById("zipcode").innerHTML = errorMessages;
    return validZipcode;
}
