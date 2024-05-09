"use strict"

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

//begin looping the students
let numberStudents = students.length

for (let i = 0; i < numberStudents; i++) {

    //start a running total for the scores to be stored in the total variable
    let total = 0;

    //get the array of scores for the specific student
    let currentStudentScore = students[i].scores
    //choosing student[i] is choosing the whole loop of the list and .scores is defining what u wnat
    let scoreNumbers = currentStudentScore.length

    //now we need to loop that students scores
    for (let i = 0; i < scoreNumbers; i++) {

        total += currentStudentScore[i];
    }
    let studentAverage = total / scoreNumbers;


    console.log(`${students[i].name} has an average score of ${studentAverage}`)

}
