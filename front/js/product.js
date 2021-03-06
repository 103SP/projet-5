import api from "./Storage_API/api.js";
import cartStore from "./Storage_API/cartStore.js";

const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
const id = searchParams.get('id');

//console.log(_id);
//élément HTML DOM parle id
const dom = {
  title: document.getElementById("title"),
  price: document.getElementById("price"),
  description: document.getElementById("description"),
  image: document.querySelector(".item__img"),
  colors: document.getElementById("colors"),
  quantity: document.getElementById("quantity"),
  addToCart: document.getElementById("addToCart"),
};

const product = await api.getOneProductById(id);
/* product: { altTxt, colors, description, imageUrl, name, price, _id } */
dom.title.innerHTML = product.name;
dom.price.innerHTML = product.price;
dom.description.innerHTML = product.description;
dom.image.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
product.colors.forEach((color) => {
  dom.colors.innerHTML += `<option value="${color}">${color}</option>`;
});
// ajouté un product au panier
dom.addToCart.addEventListener("click", (event) => {
  cartStore.add({
    id: id,
    color: dom.colors.value,
    quantity: parseInt(dom.quantity.value),
  });
});
