let url = `http://localhost:3000/api/products`;

const dom = {
  items: document.querySelector("#items"),
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      /* product structure: { altTxt, colors, description, imageUrl, name, price, _id } */
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
  })
  .catch((err) => console.log("erreur : " + err));

/* Appeler un fonction de script.js depuis product.js */
