"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Twizlers", price: 3.98 },
    { product: "Red Hots", price: 1.25 },
    { product: "Nerds", price: 0.75 },
    { product: "Gummy Planets", price: 5.35 },
    { product: "Air Heads", price: 2.50 },
    { product: "Cow tails", price: 1.59 },
    { product: "Razzles", price: 2.99 }

];

let numOfCandy = products.length;
for (let i = 0; i < numOfCandy; i++) {
    // console.log(products[i])

    //creating an if statment to pick out the candy less than 4 buckaroos
    if (products[i].price < 4) {
        //if less than 4 the product name will show as well as the price
        console.log(`The candy ${products[i].product} is ${products[i].price} making it less than $4`);
    }
    //using indexOf
    let index = products[i].product.indexOf("M&Ms");
    if (index !=-1) {

        console.log(`The items ${products[i].product} contains M&Ms in its name`);

    }
    if (products[i].product === "Gummy Worms") {

        console.log(`We Have Gummy Worms`)
    }


}