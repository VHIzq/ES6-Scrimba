let bancos = ["BBVA","BANORTE", "BANAMEX", "SANTANDER", "HSBC", "BANJERCITO"];

function checarBancos(bancos, banco = "BBVA"){
  if(bancos.includes(banco)){
    console.log("EXISTE EN EL SISTEMA");
  }else{
    console.log("INTENTE CON OTRO BANCO");
  }
}

checarBancos(bancos, "BB");

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console  if you have it
        * Else print into the console 
*/


const ingredients =  [ "flour", "sugar", "eggs", "butter", "chocolate" ];
function bakingCake(ingredients, ingredient){
  ingredients.includes(ingredient) ? console.log("We are going to make a chocolate cake") : 
  console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
}
bakingCake(ingredients, "chocolate");
