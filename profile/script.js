// Write your script here
let pre = JSON.parse(localStorage.getItem("user"));

if(!pre.signedup){
    window.location = "../signup/index.html";
}
else if(!pre.loggedin){
    window.location = "../login/index.html";
}

function saveInfo(){
    let user = JSON.parse(localStorage.getItem("user"));
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    if(fname.trim()==""){
        document.getElementById('msgBox').innerHTML=
        `
            <p style="color:red">First Name cannot be empty<p>
        `
    }
    else if(lname.trim()==""){
        document.getElementById('msgBox').innerHTML=
        `
            <p style="color:red">Last Name cannot be empty<p>
        `
    }
    else{
        user.fname = fname;
        user.lname = lname;
        document.getElementById('msgBox').innerHTML=
        `
            <p style="color:green">Profile Info Saved!<p>
        `
        localStorage.setItem("user",JSON.stringify(user));

        document.getElementById('fname').value ="";
        document.getElementById('lname').value = "";

        setTimeout(function(){
            document.getElementById('msgBox').innerHTML=
            `
                <p ><p>
            `
        },3000)
    }
}


function updatePassword(){
    let user = JSON.parse(localStorage.getItem("user"));
    let opass = document.getElementById('opass').value;
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    if(user.password!=opass){
        document.getElementById('msgBox2').innerHTML=
        `
            <p style="color:red">Incorrect password<p>
        `
    }
    else if(pass1!=pass2){
        document.getElementById('msgBox2').innerHTML=
        `
            <p style="color:red">Passwords do not match<p>
        `
    }
    else if(pass1.trim()=="" || pass2.trim()==""){
        document.getElementById('msgBox2').innerHTML=
        `
            <p style="color:red">Passwords cannot be empty<p>
        `
    }
    else{
        user.password = pass1;
        localStorage.setItem("user",JSON.stringify(user));
        document.getElementById('msgBox2').innerHTML=
        `
            <p style="color:green">Password updated successfully!!<p>
        `
        document.getElementById('opass').value = "";
        document.getElementById('pass1').value = "";
        document.getElementById('pass2').value = "";
        setTimeout(function(){
            document.getElementById('msgBox2').innerHTML=
            `
                <p ><p>
            `
        },3000)
    }
}
