const queryString_url_id = window.location.search;
console.log(queryString_url_id);
//const _id = queryString_url_id.slice();
//console.log(_id); 
let url = `http://localhost:3000/api/products`;

let name = document.getElementById("title");
let price = document.getElementById("price");
console.log(title);

///////////////////////////////////////////
fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data);
    document.querySelectorAll('title').innerHTML = data.name;
    for (let i = 0; i < data.length; i++) {

       name.innerHTML = data[i].name;
       price.innerHTML = data[i].price;
    }
  })
);
