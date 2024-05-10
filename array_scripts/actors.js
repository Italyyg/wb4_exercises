"use strict"

//object with a array list created to pick from like a bowl of candy
let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

//selecting the length of the list to run the loop and stop it once done
let members = academyMembers.length;

//now we create the loop and set rules
for (let i = 0; i < members; i++) {

    //statement saying is the id is equal to said number gimmie da actor
    if (academyMembers[i].memID === 187) {

        //message displayed is requierment are met
        console.log(`The academy member under ${academyMembers[i].memID} is ${academyMembers[i].name}`)


    }
    //now we see if an actor has been in 3 or more films than their name will show up
    if (academyMembers[i].films.length >= 3) {

        console.log(`${academyMembers[i].name} is 3 or more films`)

    }
    //Now we find if an actors name had "Bob" in it we want their name to appear like a ghost
    let index = academyMembers[i].name.indexOf("Bob");
    if (index === 0) {

        console.log(`If an actors name starts with bob their name is : ${academyMembers[i].name}`);

    }
    //creating variables to get the films to run on its own and get the movies that begin with A
   let actorsFilm = academyMembers[i].films.length;
   

    //run loop for films specifically 
    for (let m = 0; m < actorsFilm; j++) {

       let firstmovie = academyMembers[i].films[m].indexOf("A");
        if (firstmovie  === 0) {
            
            console.log(`The actors with movies who start with "A" are ${academyMembers[i].name} with the movies ${academyMembers[i].films[j]}`);

          
       

        //if the name has a film with that beigins with A 
    }


}
}
