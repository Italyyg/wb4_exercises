"use strict"


//The curly brakets make it an object
let person={
    //these are properties of the object
    name:"Italy Gonzalez",
    address:"123 Behind you",
    city:"Your closet",
    state:"Texas",
    zip:"75180"

};

//a function that formats and prints an adress for a contact to the consol
function printContact(contact){

    console.log(` 
        ${contact.name}
        ${contact.address}
        ${contact.city}, ${contact.state} ${contact.zip}
    
    `)

}
//run the function with the person we created
printContact(person);
