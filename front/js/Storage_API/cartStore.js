function set(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function get() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
      return clear();
    }
    return cart;
  }
  
  function add(item) {
    let cart = get();
    let index = cart.findIndex(
      (elem) => elem.id === item.id && elem.color === item.color
    );
    if (index === -1) {
      cart.push(item);
    } else {
      cart[index].quantity = cart[index].quantity + item.quantity;
    }
    set(cart);
  }
  
  function remove(item) {
    let cart = get();
    cart = cart.filter(
      (elem) => elem.id !== item.id || elem.color !== item.color
    );
    set(cart);
    return cart;
  }
  
  function setQuantity(item, quantity) {
    let cart = get();
    let index = cart.findIndex(
      (elem) => elem.id === item.id && elem.color === item.color
    );
    if (index !== -1) {
      cart[index].quantity = quantity;
    }
    set(cart);
  }
  
  function clear() {
    set([]);
    return [];
  }

  function getForm() {
    
    let form = document.querySelector(".cart__order__form");
  
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
  
  export default {
    add,
    get,
    setQuantity,
    remove,
    clear,
  };
  