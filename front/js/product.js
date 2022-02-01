const dataApi = fetch("http://localhost:3000/api/products");
// récupérer les ID produits avec window location
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const _id = queryString_url_id.slice();
console.log(_id);

// récupérer les ID produits avec window location fin
/*const products = [
    {nom: 'Kanap Sinopé', quantité: 0},
    {nom: 'Kanap Cyllène', quantité: 1},
    {nom: 'Kanap Calycé', quantité: 2},
    {nom: 'Kanap Autonoé', quantité: 3},
    {nom: 'Kanap Eurydomé', quantité: 4},
    {nom: 'Kanap Hélicé', quantité: 5},
    {nom: 'Kanap Thyoné', quantité: 6},
    {nom: 'Kanap orthosie', quantité: 7},
  ];

const resultat = products.find( kanap => kanap.nom === 'Kanap Sinopé');
console.log(resultat);*/


dataApi
.then(async(responseData) => {

    const response = await responseData.json();
    console.log();

try{    
    const imageUrl = response[0].imageUrl;
    const name = response[0].name;
    const description = response[0].description;
    const colors = response[0].colors;
    const price = response[0].price;

    console.log(imageUrl);
    console.log(name);
    console.log(description);
    console.log(colors);
    console.log(price);

    
    const affichage_name = document.querySelector("#title");
    const affichage_description = document.querySelector("#description");
    const affichage_colors = document.querySelector("#colors");
    const affichage_price = document.querySelector("#price");

    
    affichage_name.innerHTML = title;
    affichage_description.innerHTML = description;
    affichage_colors.innerHTML = colors;
    affichage_price.innerHTML = price;

    }catch (err) {
        console.log(err);
    }
})

.catch((err) => {
    console.log(err);
});


    //for (var i = 0; i < data.length; i++) {
        //document.getElementById("item__img").innerHTML += ""



/*
let imageUrl = document.createElement('img');
        article.appendChild(imageUrl);
        imageUrl.src = data.imageUrl;
        imageUrl.alt = data.altTxt;
*/


//});

