import api from "./helpers/api.js";

const dom = {
  items: document.querySelector("#items"),
};

const products = await api.getAllProducts();
products.forEach((product) => {
  /* product: { altTxt, colors, description, imageUrl, name, price, _id } */
  let html = `
  <a href="./product.html?id=${product._id}">
    <article>
      <img src="${product.imageUrl}" alt="${product.altTxt}">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
  </a>`;
  dom.items.innerHTML += html;
});
