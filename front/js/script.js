import api from "./Storage_API/api.js"; // import Products

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
  // les produits page d'acceuil
});


/*<a href="./product.html?id=42">
<article>
  <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
  <h3 class="productName">Kanap name1</h3>
  <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
</article>
</a> -->*/