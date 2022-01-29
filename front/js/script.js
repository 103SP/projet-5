let url =`http://localhost:3000/api/products`;

fetch(url).then((Response) =>
Response.json().then((data) => {
    console.log(data);
    document.querySelectorAll('#items').innerHTML = data.name;
    for (let i = 0; i < data.length; i++) {
        document.getElementById("items").innerHTML += ""

        let a_href = document.createElement('a');
        document.querySelector('#items').appendChild(a_href);
        a_href.href =  `product.html?id=${data._id}`;

        let article = document.createElement('article');
        a_href.appendChild(article);

        let name = document.createElement('productName');
        article.appendChild(name);
        name.classList.add('productName');
        name.innerHTML = data.name;
        
        let description = document.createElement('productDescription');

        let imageUrl = document.createElement('img');

        let altTxt = document.createElement('alt');
       /* + data[i].colors + 
        + data[i].name + 
        + data[i].description + 
       + "<img src=" + data[i].imageUrl + ">" +  
        + data[i].price + */
 
        "</li></ul>";  
        }
})
).catch(err => console.log('erreur : ' + err));

/*<a href="./product.html?id=42">
<article>
  <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
  <h3 class="productName">Kanap name1</h3>
  <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
</article>
</a> -->*/