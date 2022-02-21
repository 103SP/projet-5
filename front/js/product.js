const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
const id = searchParams.get('id');
console.log(queryString, id);

//const _id = queryString_url_id.slice();
//console.log(_id);
let url = `http://localhost:3000/api/products/${id}`;

let name = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');
let imageUrl = document.querySelector('.item__img');
let img = document.createElement('img');
imageUrl.appendChild(img);
let colors = document.getElementById('colors');
console.log();
var temp;
///////////////////////////////////////////
fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data);
    temp = data;
    ////////////////////////////////////////
    name.innerHTML = data.name;
    price.innerHTML = data.price;
    description.innerHTML = data.description;
    img.setAttribute('src', data.imageUrl);
    img.setAttribute('alt', data.altTxt);

    for ( let i=0; i < data.colors.length; i++) {
      let colorsoption = document.createElement('option');
      colors.setAttribute("value", data.colors[i]);
      colorsoption.innerHTML = data.colors[i];
      colors.appendChild(colorsoption);
      console.log(data.color);
    }
  })
);
