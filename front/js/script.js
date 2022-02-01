let url =`http://localhost:3000/api/products`;

fetch(url).then((Response) =>
Response.json().then((data) => {
    console.log(data);
    document.querySelectorAll('#items').innerHTML = data.name;
    for (let i = 0; i < data.length; i++) {

        let a_href = document.createElement('a');
        document.querySelector('#items').appendChild(a_href);
        a_href.href =  `product.html?id = ${data[i]._id}`;

        let _id = [data[i]._id];
        //console.log(_id);

        let article = document.createElement('article');
        a_href.appendChild(article);

        let imageUrl = document.createElement('img');
        article.appendChild(imageUrl);
        imageUrl.src = data[i].imageUrl;
        imageUrl.alt = data[i].altTxt;
        

        let name = document.createElement('h3');
        article.appendChild(name);
        name.classList.add('productName');
        name.innerHTML = data[i].name;
        
        
        let description = document.createElement('p');
        article.appendChild(description);
        description.classList.add('productDescription');
        description.innerHTML = data[i].description;

        
        //console.log(data[i]._id);
        //console.log(data[i].imageUrl);
        //console.log(data[i].altTxt);
        //console.log(data[i].name);
        //console.log(data[i].description);

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