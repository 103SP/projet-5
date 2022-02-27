const API_URL = "http://localhost:3000/api";

function getAllProducts() {
  return fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
}

function getOneProductById(id) {
  return fetch(`${API_URL}/products/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
}

export default { getAllProducts, getOneProductById };
