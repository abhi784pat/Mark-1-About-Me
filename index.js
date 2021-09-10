let readlineSync = require("readline-sync")
const chalk = require('chalk');

let score = 0
let highScores = [{
    name: "Abhishek",
    score: 5    
},
{
    name: "Jitesh", 
    score: 4
}];

(function welcome(){
    let userName = readlineSync.question("What's your name? ")
    console.log(chalk.yellow("Welcome " + userName + " Do you know Abhishek?"))
})()

let questions= [
     {
        question: "Where do I live? ",
        answer: "Bihar"
    },
    {
        question: "What is my favourite anime? ",
        answer: "Aot"
    },
    {
        question: "What is my favorite food? ",
        answer: "Chicken"
    },
    {
        question: "What is my favorite destination? ",
        answer: "Sonepur"
    },
    {
        question: "What is my hobby? ",
        answer: "Coding"
    }
]

function play(question, answer){
    var userAnswer = readlineSync.question(question)

    if(userAnswer.toLowerCase() == answer.toLowerCase()){
        console.log(chalk.green("right"))
        score++
    }
    else{
        console.log(chalk.red("wrong"))
    }

    console.log(chalk.blue("current score: ", score))
    console.log(chalk.white("----------------------"))
}

(function game(){
    questions.forEach(question =>{
        play(question.question, question.answer)
    })
})()
console.log(chalk.green("Final Score" ,score))
console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score => console.log(score.name, " : ", score.score))



