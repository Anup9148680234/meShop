function logIn(){
    let user = localStorage.getItem("user");
    let userJson = JSON.parse(user);
    
    let emailInp = document.getElementById('email').value;
    let passInp = document.getElementById('pass1').value;
    let msgbox = document.getElementById('msgBox');

    if(emailInp != userJson.email){
        msgbox.innerHTML = `
            <p style="color:red;">Email not registered with Meshop. Please Signup</p>
        `
    }
    else if(passInp != userJson.password){
        msgbox.innerHTML = `
            <p style="color:red;">Wrong password.</p>
        `
    }
    else{
        msgbox.innerHTML = `
            <p style="color:green;">Welcom back ${userJson.fname} ${userJson.lname}!</p>
        `
        setTimeout(function(){
            window.location = "../profile/profile.html"
        },1000);
    }
}