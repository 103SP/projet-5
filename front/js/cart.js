import api from "./Storage_API/api.js";
import cartStore from "./Storage_API/cartStore.js";

const dom = {
  items: document.getElementById("cart__items"),
};

for (let item of cartStore.get()) {
  /* item = { color, id, quantity } */
  const product = await api.getOneProductById(item.id);
  /* product: { altTxt, colors, description, imageUrl, name, price, _id } */

  const div = document.createElement("div");
  div.innerHTML = `
  <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
      <div class="cart__item__img">
          <img src="${product.imageUrl}" alt="${product.altTxt}">
      </div>
      <div class="cart__item__content">
          <div class="cart__item__content__description">
          <h2>${product.name}</h2>
          <p>${item.color}</p>
          <p>${product.price} €</p>
          </div>
          <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
          </div>
          </div>
      </div>
  </article>`.trim();
  div.querySelector(".deleteItem").addEventListener("click", (event) => {
    cartStore.remove(item);
    event.target.closest("article.cart__item").remove();
  });
  div.querySelector(".itemQuantity").addEventListener("change", (event) => {
    cartStore.setQuantity(item, parseInt(event.target.value));
  });
  dom.items.appendChild(div.firstChild);
}

