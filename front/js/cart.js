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
  /* 5-Éffacer un produit du panier au click */
  div.querySelector(".deleteItem").addEventListener("click", (event) => {
    cartStore.remove(item);
    event.target.closest("article.cart__item").remove();
  });
  div.querySelector(".itemQuantity").addEventListener("change", (event) => {
    cartStore.setQuantity(item, parseInt(event.target.value));
  });
  dom.items.appendChild(div.firstChild);
}

function getForm() {
    
  let form = document.querySelector(".cart__order__form");
//https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/JavaScript_Examples.html
  //Validation selon une expression régulière Regex
  let emailRegExp = /.+@.+\..+/;
  let charRegExp = /^[a-zA-Z ,.'-]+$/;
  let addressRegExp = /[0-9]+[a-zA-Z ,.'-]/; 

  form.firstName.addEventListener('change', function() {
      validFirstName(this);
  });

  form.lastName.addEventListener('change', function() {
      validLastName(this);
  });

  form.address.addEventListener('change', function() {
      validAddress(this);
  });

  form.city.addEventListener('change', function() {
      validCity(this);
  });

  form.email.addEventListener('change', function() {
      validEmail(this);
  });

  const validFirstName = function(inputFirstName) {
      let firstNameErrorMsg = inputFirstName.nextElementSibling;

      if (charRegExp.test(inputFirstName.value)) {
          firstNameErrorMsg.innerHTML = '';
      } else {
          firstNameErrorMsg.innerHTML = 'Prénon non valide.';
      }
  };

  const validLastName = function(inputLastName) {
      let lastNameErrorMsg = inputLastName.nextElementSibling;

      if (charRegExp.test(inputLastName.value)) {
          lastNameErrorMsg.innerHTML = '';
      } else {
          lastNameErrorMsg.innerHTML = 'Non non valide.';
      }
  };

  const validAddress = function(inputAddress) {
      let addressErrorMsg = inputAddress.nextElementSibling;

      if (addressRegExp.test(inputAddress.value)) {
          addressErrorMsg.innerHTML = '';
      } else {
          addressErrorMsg.innerHTML = 'Adresse non valide.';
      }
  };

  const validCity = function(inputCity) {
      let cityErrorMsg = inputCity.nextElementSibling;

      if (charRegExp.test(inputCity.value)) {
          cityErrorMsg.innerHTML = '';
      } else {
          cityErrorMsg.innerHTML = 'Ville non valide.';
      }
  };

   const validEmail = function(inputEmail) {
    let emailErrorMsg = inputEmail.nextElementSibling;

    if (emailRegExp.test(inputEmail.value)) {
        emailErrorMsg.innerHTML = '';
    } else {
        emailErrorMsg.innerHTML = 'email non valide.';
    }
};
}
getForm();
