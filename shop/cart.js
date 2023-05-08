fetch("shop.html")
.then((response)=>response.text())
.then(html =>{
    console.log(html);
})