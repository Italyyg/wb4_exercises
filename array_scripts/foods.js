"use strict"

//creating a objects with arrays to carry price and order
let lunch = [
    { item: "Southwest Salad", price: 9.95 },
    { item: "Spicy Nuggets", price: 7.10 },
    { item: "Spicy Mcchicken", price: 2.10 }

];

//a function to run the math "foodie" is a placeholder for what u actually wanna run
function addMyLunch(foodie) {

    //variable to keep track of number, like a place holder(filler)
    let total = 0;

    //assigning leght of list to a variable
    let food = foodie.length
    for (let i = 0; i < food; i++) {

        //when you want to choose a certain area(of the object), this is where u do it 
        total += foodie[i].price
    }

    return total;
}
let lunchTotal = addMyLunch(lunch);
let lunchTax = lunchTotal * (8 / 10);
let lunchTip = lunchTotal * (18 / 100);
let totalDue = lunchTotal + lunchTip + lunchTip


console.log("The lunch total was: " + lunchTotal.toFixed(2));
console.log("The tax was: " + lunchTax.toFixed(2));
console.log("The tip was: " + lunchTip.toFixed(2));
console.log("The total due is: " + totalDue.toFixed(2));

