let contacts = ["Gera", "Fri", "Niv", "Ritz", "Dani Girl", "Dani Boy"];
let personalFriends = contacts;
let personalFriendsOriginalList = ["Magali",...contacts, "Lau"];
contacts.push("Carlos");
/* contacts.sort();
let newFriends = contacts.slice(0,3);
let oldFriends = contacts.splice(2,4, "Rodrigo"); */ 
console.log(personalFriends);
//console.log(newFriends);
console.log(personalFriendsOriginalList);


let person = {
  name: "Alice",
  age: 28,
  city: "Raccon City"
}
let employee = {
  ...person,
  salary: 80000,
  position: "Discovery and Research at Umbrella"
}
console.log(employee);


/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/
const shoppingList = ["eggs", "milk", "butter"];
let shoppingBasket = [...shoppingList, "Tacos", "Avocados"];
shoppingBasket.push("Apple", "Jam", "Sausages")
console.log(shoppingBasket);

