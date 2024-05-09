"use strict"


//variables created to hold arrays with the scores
let myScores =[92,98,84,76,89,99,100];
let yourScores =[82,98,94,88,92,100,100];


//a function to calculate the average
function getAverage(scoresArray){
   
   //create a variable to keep track of our total of all our numbers in the array
    let total=0;

        //getting the length of the list and assigning
    let score=scoresArray.length;

    for(let i=0; i< score; i++){
        total+=scoresArray[i]

    }
    return total/score


}
console.log(getAverage(myScores));
console.log(getAverage(yourScores));