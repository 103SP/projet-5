const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
const id = searchParams.get('id');
//console.log(queryString, id);

//const _id = queryString_url_id.slice();
//console.log(_id);
let url = `http://localhost:3000/api/products/${id}`;

let name = document.getElementById('title');
let price = document.getElementById('price');
let ajouter = document.getElementById('addToCart')
let description = document.getElementById('description');
let imageUrl = document.querySelector('.item__img');
let img = document.createElement('img');
imageUrl.appendChild(img);
let colors = document.getElementById('colors');
let quantiter = document.getElementById("quantity")
//console.log();
var temp;
///////////////////////////////////////////
fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data);
    temp = data;
    ////////////////////////////////////////
    name.innerHTML = data.name;
    price.innerHTML = data.price;
    description.innerHTML = data.description;
    img.setAttribute('src', data.imageUrl);
    img.setAttribute('alt', data.altTxt);
///////////////////////////////////////////
//////boucle récupération de couleur//////
    for ( let i=0; i < data.colors.length; i++) {
      let colorsoption = document.createElement('option');
      colors.setAttribute("value", data.colors[i]);
      colorsoption.innerHTML = data.colors[i];
      colors.appendChild(colorsoption);
      //console.log(data.color);
    }
  })
);
///////////////////////////////////
///////////ajouter produit////////
let panier =[]
let produitEnregistre = JSON.parse(localStorage.getItem("item"));
const addProduct = (event) => {
//console.log(id,colors.value,quantiter.value);
let item = {
  id: id, 
  quantity: parseInt (quantiter.value), 
  color: colors.value,
}
let index = panier.findIndex(elem => elem.id ===item.id && elem.color === item.color)
console.log(index);
if(index === -1){
  panier.push (item)
  
}
else {
  panier[index].quantity = panier[index].quantity + item.quantity;
}
console.log(panier);

if(produitEnregistre){
  produitEnregistre.push(item);
  localStorage.setItem("produit",JSON.stringify(produitEnregistre));
  console.log(produitEnregistre);
}
else{
  produitEnregistre = [];
  produitEnregistre.push(item);
  localStorage.setItem("produit",JSON.stringify(produitEnregistre));
  console.log(produitEnregistre);
}
}
ajouter.addEventListener('click',addProduct)

