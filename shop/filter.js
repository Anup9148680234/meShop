function filter1(){
    let filterArr = [];
    if(document.getElementById('red').checked) filterArr.push('red');
    if(document.getElementById('green').checked) filterArr.push('green');
    if(document.getElementById('blue').checked) filterArr.push('blue');
    if(document.getElementById('black').checked) filterArr.push('black');
    if(document.getElementById('white').checked) filterArr.push('white');

    let arr = document.querySelectorAll('#colorsTab');
    arr.forEach((e)=>{
        filterArr.forEach((f)=>{
            if(!e.innerHTML.includes(f)){
                e.parentNode.parentNode.parentNode.style.display = "none";
            }

        })
    })

    if(filterArr.length==0){
        arr.forEach((e)=>{
            e.parentNode.parentNode.parentNode.style.display = "block";
        })
    }

}

function filter2(){
    let filterArr2 = [];
    if(document.getElementById('size-s').checked) filterArr2.push("S");
    if(document.getElementById('size-m').checked) filterArr2.push("M");
    if(document.getElementById('size-l').checked) filterArr2.push("L");
    if(document.getElementById('size-xl').checked) filterArr2.push("XL");

    let arr2 = document.querySelectorAll('.size');
    let arr3 = []
    if(filterArr2.length!=0){
        filterArr2.forEach((f)=>{
            arr2.forEach((e)=>{
                if(!(e.innerHTML).includes(f) && !(e.innerHTML).includes(arr3[0])){
                    e.parentNode.parentNode.parentNode.style.display = "none";
                }else{
                    arr3.push(f);
                }
            })
        })
    }
    else if(filterArr2.length==0){
        //reset filter
        let arrX = document.querySelectorAll('.item');
        arrX.forEach(e=>{
            e.style.display = "block"
        })
    }
}

function filter3(){
    let Offset = document.getElementById('range').value;

    let array = document.querySelectorAll(".ratings");
    array.forEach(e =>{
        let rat = Number.parseFloat(e.innerText.split(" ")[1]);
        if(!(rat>Offset)){
            e.parentNode.parentNode.style.display = "none";
        }
    })
}

function filter4(){

    let def = document.querySelectorAll('.item');
    def.forEach(e=>{
        e.style.display="none";
    })

    let array = document.querySelectorAll('.price');
    array.forEach(e =>{
        let p = e.innerText;
        let fp = Number.parseFloat(p.slice(1,p.length-1));

        if((document.getElementById('100on').checked || document.getElementById('50-100').checked || document.getElementById('25-50').checked || document.getElementById('0-25').checked)){

            
            if(document.getElementById('100on').checked && fp>100){
                e.parentNode.parentNode.parentNode.style.display = "block";
            }
    
            if(document.getElementById('50-100').checked && fp<=100 && fp>50){
                e.parentNode.parentNode.parentNode.style.display = "block";
            }
    
    
            if(document.getElementById('25-50').checked && fp<=50 && fp>25){
                e.parentNode.parentNode.parentNode.style.display = "block";
            }
            
    
            if(document.getElementById('0-25').checked && fp<=25){
                e.parentNode.parentNode.parentNode.style.display = "block";
            }
        }
        else{
            def.forEach(e=>{
                e.style.display="block";
            })
        }

    })

}


function applyFilter(){
    filter1();
    filter2();
    filter3();
    filter4();

    

    
    let arr = document.querySelectorAll('.item');
    

}