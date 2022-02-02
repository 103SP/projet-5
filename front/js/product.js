const queryString_url_id = window.location.search;
console.log(queryString_url_id);
//const _id = queryString_url_id.slice();
//console.log(_id); 
let url = `http://localhost:3000/api/products`;

let name = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let imageUrl = document.querySelector(".item__img");
let img = document.createElement("img");
imageUrl.appendChild(img);
console.log(title);

///////////////////////////////////////////
fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data);
    document.querySelectorAll('title').innerHTML = data.name;
    for (let i = 0; i < data.length; i++) {

       name.innerHTML = data[i].name;
       price.innerHTML = data[i].price;
       description.innerHTML =data[i].description;
       img.setAttribute("src", data[i].imageUrl);
        img.setAttribute("alt", data[i].altTxt);
    }
  })
);
