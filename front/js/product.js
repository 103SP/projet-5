import cartStore from "./helpers/cartStore.js";

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

dom.addToCart.addEventListener("click", (event) => {
  cartStore.add({
    id: id,
    color: dom.colors.value,
    quantity: parseInt(dom.quantity.value),
  });
  console.log(cartStore.get());
});
