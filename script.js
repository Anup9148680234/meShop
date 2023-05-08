// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
let user = {
    "fname":"",
    "lname": "",
    "email":"",
    "password":"",
    "signedup":false,
    "loggedin":false,
}


localStorage.setItem("user",JSON.stringify(user));