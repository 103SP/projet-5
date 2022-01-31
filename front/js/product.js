const dataApi = fetch("http://localhost:3000/api/products");

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
    const affichage_colors = document.querySelector("colors");
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

