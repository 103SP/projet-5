/*Données API localhost les products*/
//fetch("http://localhost:3000/api/products")
//.then(Reponse => Reponse.json())


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("http://localhost:3000/api/products", function(text){
    var data = JSON.parse(text);
    
    console.log(data);
/* dans la boucle for 
    console.log(data[i].altTxt);
    console.log(data[i].colors);        
    console.log(data[i].description);
    console.log(data[i].name);
    console.log(data[i].imageUrl);
    console.log(data[i].price);
*/

    for (var i = 0; i < data.length; i++) {
        document.getElementById("items").innerHTML += 
        ""

         + data[i].altTxt + 
        + data[i].colors + 
        + data[i].name + 
        + data[i].description + 
       + "<img src=" + data[i].imageUrl + ">" +  
        + data[i].price + 
 
        "</li></ul>";  
        }
/*

    console.log(data[i].altTxt);
    console.log(data[i].description);
    console.log(data[i].name);
    console.log(data[i].imageUrl);
    console.log(data[i].price);
*/
});


// MIse en page 
/*           <a href=./product.html?id=42">
            <article>
              <img src= \".../product01.jpg alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a> 

 */         


/*let p = document.createElement("p");

document.getElementById("items").appendChild(p);

p.innerHTML = "Mon <strong>grand</strong> contenu";
p.classList.add("name");*/

