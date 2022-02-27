const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");
//console.log(queryString, id);

//const _id = queryString_url_id.slice();
//console.log(_id);
let url = `http://localhost:3000/api/products/${id}`;

const dom = {
  title: document.getElementById("title"),
  price: document.getElementById("price"),
  description: document.getElementById("description"),
  image: document.querySelector(".item__img"),
  colors: document.getElementById("colors"),
  quantity: document.getElementById("quantity"),
  addToCart: document.getElementById("addToCart"),
};

fetch(url)
  .then((response) => response.json())
  .then((product) => {
    /* product: { altTxt, colors, description, imageUrl, name, price, _id } */
    console.log(product);
    dom.title.innerHTML = product.name;
    dom.price.innerHTML = product.price;
    dom.description.innerHTML = product.description;
    dom.image.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
    product.colors.forEach((color) => {
      dom.colors.innerHTML += `<option value="${color}">${color}</option>`;
    });
  });
///////////////////////////////////
///////////ajouter produit////////
let panier = [];
let produitEnregistre = JSON.parse(localStorage.getItem("item"));
const addProduct = (event) => {
  //console.log(id,dom.colors.value,dom.quantity.value);
  let item = {
    id: id,
    quantity: parseInt(dom.quantity.value),
    color: dom.colors.value,
  };
  let index = panier.findIndex(
    (elem) => elem.id === item.id && elem.color === item.color
  );
  console.log(index);
  if (index === -1) {
    panier.push(item);
  } else {
    panier[index].quantity = panier[index].quantity + item.quantity;
  }
  console.log(panier);

  if (produitEnregistre) {
    produitEnregistre.push(item);
    localStorage.setItem("produit", JSON.stringify(produitEnregistre));
    console.log(produitEnregistre);
  } else {
    produitEnregistre = [];
    produitEnregistre.push(item);
    localStorage.setItem("produit", JSON.stringify(produitEnregistre));
    console.log(produitEnregistre);
  }
};

console.log(dom.addToCart)

dom.addToCart.addEventListener("click", addProduct);
