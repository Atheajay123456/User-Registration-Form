let usernamePattern = /^[A-Z]{1}[a-z]{3,8}$/;
let passwordPattern = /^[A-Z]{1}[a-z!@#%&*]{3,12}[0-9]{2,}$/;
let mobilePattern = /^[6-9]{1}[0-9]{9}$/;
let mailPattern = /^[A-Za-z0-9]{8,}@[A-Za-z]{5}\.[A-Za-z]{2,}$/;
let pancardPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
let adharcardPattern =/^[0-9]{4} [0-9]{4} [0-9]{4}$/;

let erroru = document.getElementById("erroru");
let errorp = document.getElementById("errorp");
let errorm = document.getElementById("errorm");
let errore = document.getElementById("errore");
let errorpan = document.getElementById("errorpan");
let errorad = document.getElementById("errorad");

function validation(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let pancard = document.getElementById("pancard").value;
    let adhar = document.getElementById("adhar").value;

    let isvalid = true;
    

    if(!usernamePattern.test(username)){
        erroru.innerHTML = "Invalid username";
        erroru.style.color = "red";
        isvalid = false;
    }
    else{
        erroru.innerHTML = "Valid username";
        erroru.style.color = "green";
    }

    if(!passwordPattern.test(password)){
        errorp.innerHTML = "Invalid password";
        errorp.style.color = "red";
        isvalid = false;
    }
    else{
        errorp.innerHTML = "Valid password";
        errorp.style.color = "green";
    }

    if(!mobilePattern.test(mobile)){
        errorm.innerHTML = "Invalid mobile number";
        errorm.style.color = "red";
        isvalid = false;
    }
    else{
        errorm.innerHTML = "Valid mobile number";
        errorm.style.color = "green";
    }

    if(!mailPattern.test(email)){
        errore.innerHTML = "Invalid email";
        errore.style.color = "red";
        isvalid = false;
    }
    else{
        errore.innerHTML = "Valid email";
        errore.style.color = "green";
    }

    if(!pancardPattern.test(pancard)){
        errorpan.innerHTML = "Invalid pancard number";
        errorpan.style.color = "red";
        isvalid = false;
    }
    else{
        errorpan.innerHTML = "Valid pancard number";
        errorpan.style.color = "green";
    }

    if(!adharcardPattern.test(adhar)){
        errorad.innerHTML = "Invalid adhar number";
        errorad.style.color = "red";
        isvalid = false;
    }
    else{
        errorad.innerHTML = "Valid adhar number";
        errorad.style.color = "green";
    }

    return isvalid;

}