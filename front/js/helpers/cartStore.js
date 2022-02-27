let cart = [];
// let produitEnregistre = JSON.parse(localStorage.getItem("item"));

//   if (produitEnregistre) {
//     produitEnregistre.push(item);
//     localStorage.setItem("produit", JSON.stringify(produitEnregistre));
//     console.log(produitEnregistre);
//   } else {
//     produitEnregistre = [];
//     produitEnregistre.push(item);
//     localStorage.setItem("produit", JSON.stringify(produitEnregistre));
//     console.log(produitEnregistre);
//   }

function add(item) {
  let index = cart.findIndex(
    (elem) => elem.id === item.id && elem.color === item.color
  );
  if (index === -1) {
    cart.push(item);
  } else {
    cart[index].quantity = cart[index].quantity + item.quantity;
  }
}

function get() {
  return cart;
}

const cartStore = {
  add: add,
  get: get
};

export default cartStore;
