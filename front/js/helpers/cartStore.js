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

function clear() {
  set([]);
  return [];
}

export default {
  add,
  get,
  clear,
};
