"use strict"

let myScores =[92,98,84,76,89,99,100];
let yourScores =[82,98,94,88,92,100,100];

function getAverage(scoresArray){
    let total=0;

    let score=scoresArray.length;

    for(let i=0; i< score; i++){
        total+=scoresArray[i]

    }
    return total/score


}
console.log(getAverage(myScores));
console.log(getAverage(yourScores));