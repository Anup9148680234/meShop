function sortByAll(){
    mc.style.display = "flex";
    wc.style.display = "flex";
    jw.style.display = "flex";
    ec.style.display = "flex";
    let titles = document.querySelectorAll('.Title');
    for(let i=0;i<4;i++){
         titles[i].style.display = "block";
    }
    let arr = document.querySelectorAll(".filter");
    for(let i=0;i<arr.length;i++){
        if(i!=0){
            arr[i].setAttribute("class","filter");
        }
        else{
            arr[i].setAttribute("class","filter active")
        }
    }
    
}

function sortByMens(){
    mc.style.display = "flex";
    wc.style.display = "none";
    jw.style.display = "none";
    ec.style.display = "none";
    let arr = document.querySelectorAll(".filter");
    let titles = document.querySelectorAll('.Title');
    for(let i=0;i<4;i++){
        if(i!=0){
            titles[i].style.display = "none";
        }
        else{
            titles[i].style.display = "block";
        }
    }

    for(let i=0;i<arr.length;i++){
        if(i!=1){
            arr[i].setAttribute("class","filter");
        }
        else{
            arr[i].setAttribute("class","filter active")
        }
    }
    console.log(titles);
}

function sortByWomens(){
    mc.style.display = "none";
    wc.style.display = "flex";
    jw.style.display = "none";
    ec.style.display = "none";
    let titles = document.querySelectorAll('.Title');
    for(let i=0;i<4;i++){
        if(i!=1){
            titles[i].style.display = "none";
        }
        else{
            titles[i].style.display = "block";
        }
    }

    let arr = document.querySelectorAll(".filter");
    for(let i=0;i<arr.length;i++){
        if(i!=2){
            arr[i].setAttribute("class","filter");
        }
        else{
            arr[i].setAttribute("class","filter active")
        }
    }
}

function sortByJewel(){
    mc.style.display = "none";
    wc.style.display = "none";
    jw.style.display = "flex";
    ec.style.display = "none";
    let titles = document.querySelectorAll('.Title');
    for(let i=0;i<4;i++){
        if(i!=2){
            titles[i].style.display = "none";
        }
        else{
            titles[i].style.display = "block";
        }
    }
    let arr = document.querySelectorAll(".filter");
    for(let i=0;i<arr.length;i++){
        if(i!=3){
            arr[i].setAttribute("class","filter");
        }
        else{
            arr[i].setAttribute("class","filter active")
        }
    }
}

function sortByElec(){
    mc.style.display = "none";
    wc.style.display = "none";
    jw.style.display = "none";
    ec.style.display = "flex";
    let titles = document.querySelectorAll('.Title');
    for(let i=0;i<4;i++){
        if(i!=3){
            titles[i].style.display = "none";
        }
        else{
            titles[i].style.display = "block";
        }
    }
    let arr = document.querySelectorAll(".filter");
    for(let i=0;i<arr.length;i++){
        if(i!=4){
            arr[i].setAttribute("class","filter");
        }
        else{
            arr[i].setAttribute("class","filter active")
        }
    }
}