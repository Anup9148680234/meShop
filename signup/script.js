let msgBox = document.querySelector('#msgBox');

function signUp(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    if(fname.trim()==""){
        msgBox.innerHTML  = `
        <p style="color:red;">First name cannot be empty</p>`
    }
    else if(lname.trim()==""){
        msgBox.innerHTML  = `
        <p style="color:red;">Last name cannot be empty</p>`
    }
    else if(email.trim()==""){
        msgBox.innerHTML  = `
        <p style="color:red;">Email cannot be empty</p>`
    }
    else if(pass1.trim()=="" || pass2.trim()==""){
        msgBox.innerHTML  = `
        <p style="color:red;">Password cannot be empty</p>`
    }
    else if(pass1!=pass2){
        msgBox.innerHTML  = `
        <p style="color:red;">Passwords do not match</p>`
    }
    else{
        msgBox.innerHTML  = `
        <p style="color:green;">Signup Success!</p>`

        let user = {
            "fname":fname,
            "lname": lname,
            "email":email,
            "password":pass1,
            "signedup":true,
        }

        localStorage.setItem("user",JSON.stringify(user));

        window.location = "../profile/profile.html";
    }


    
}