const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
  colors: ["red","blue","green","black","white"],
  sizes: ["s","l","m","xl"]
};

let mc = document.getElementById('mc');
let wc = document.getElementById('wc');
let jw = document.getElementById('jw');
let ec = document.getElementById('ec');

let colorsList = ["red","blue","green","black","white"];
let sizesList = ["S","L","M","XL"];

function colorPicker(arr) {
  const arrCopy = [...arr];
  const result = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
  }
  return result;
}


function getRandomCombos(colours, numCombos) {
  const colourCombos = [];

  for (let i = 0; i < numCombos; i++) {
    const randomColourIndex = Math.floor(Math.random() * colours.length);
    const randomColour = colours[randomColourIndex];
    if(!colourCombos.includes(randomColour)){
      colourCombos.push(randomColour);
    }
    
  }
  return colourCombos;
}


fetch("https://fakestoreapi.com/products")
.then((Response)=> Response.json())
.then((data)=> {
  data.forEach(element => {
    
    let sizecombo = Math.floor((Math.random() * 4) +1);

    element.colors = colorPicker(colorsList);
    element.sizes = getRandomCombos(sizesList, sizecombo);

    if(element.category == "men's clothing"){
        let item = document.createElement('div');
        item.setAttribute("class","item");
        item.setAttribute("id",`${element.id}`);
        item.innerHTML = `
        <img src="${element.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">₹${element.price}</div>
            <div class="size">${element.sizes}</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row" id="colorsTab">
              <div class="circle" style="background-color: ${element.colors[0]}"></div>
              <div class="circle" style="background-color: ${element.colors[1]}"></div>
              <div class="circle" style="background-color: ${element.colors[2]}"></div>
            </div>
          </div>
          <div class="row ratings">Rating: ${element.rating.rate} <img src="star.png"></div>
        </div>
        <button id="addBtn">Add to Cart</button>
        `
        mc.appendChild(item);
        
    }
    else if(element.category == "women's clothing"){
      let item = document.createElement('div');
      item.setAttribute("class","item");
      item.setAttribute("id",`${element.id}`);
      item.innerHTML = `
      <img src="${element.image}" alt="Item" />
      <div class="info">
        <div class="row">
          <div class="price">₹${element.price}</div>
          <div class="size">${element.sizes}</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row" id="colorsTab">
            <div class="circle" style="background-color: ${element.colors[0]}"></div>
            <div class="circle" style="background-color: ${element.colors[1]}"></div>
            <div class="circle" style="background-color: ${element.colors[2]}"></div>
          </div>
        </div>
        <div class="row ratings">Rating: ${element.rating.rate} <img class="staricon" src="star.png"></div>
      </div>
      <button id="addBtn">Add to Cart</button>
      `
      wc.appendChild(item);
    }
    else if(element.category == "jewelery"){
      let item = document.createElement('div');
        item.setAttribute("class","item");
        item.setAttribute("id",`${element.id}`);
        item.innerHTML = `
        <img src="${element.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">₹${element.price}</div>
            <div class="size">${element.sizes}</div>
          </div>
          <div class="colors" >
            Colors:
            <div class="row" id="colorsTab">
              <div class="circle" style="background-color: ${element.colors[0]}"></div>
              <div class="circle" style="background-color: ${element.colors[1]}"></div>
              <div class="circle" style="background-color: ${element.colors[2]}"></div>
            </div>
          </div>
          <div class="row ratings">Rating:  ${element.rating.rate} <img class="staricon" src="star.png"></div>
        </div>
        <button id="addBtn">Add to Cart</button>
        `
        jw.appendChild(item);
    }
    else if(element.category == "electronics"){
      let item = document.createElement('div');
        item.setAttribute("class","item");
        item.setAttribute("id",`${element.id}`);
        item.innerHTML = `
        <img src="${element.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">₹${element.price}</div>
            <div class="size">${element.sizes}</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row" id="colorsTab">
              <div class="circle" style="background-color: ${element.colors[0]}"></div>
              <div class="circle" style="background-color: ${element.colors[1]}"></div>
              <div class="circle" style="background-color: ${element.colors[2]}"></div>
            </div>
          </div>
          <div class="row ratings">Rating: ${element.rating.rate} <img src="star.png"></div>
        </div>
        <button id="addBtn">Add to Cart</button>
        `
        ec.appendChild(item);
    }
  });

}) 