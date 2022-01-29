let url =`http://localhost:3000/api/products`;

fetch(url).then((Response) =>
Response.json().then((data) => {
    console.log(data);
    document.querySelectorAll('#items').innerHTML = data.name;
    for (var i = 0; i < data.length; i++) {
        document.getElementById("items").innerHTML += ""

         + data[i].altTxt + 
        + data[i].colors + 
        + data[i].name + 
        + data[i].description + 
       + "<img src=" + data[i].imageUrl + ">" +  
        + data[i].price + 
 
        "</li></ul>";  
        }
})
).catch(err => console.log('erreur : ' + err));

