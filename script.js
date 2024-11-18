let questionList = ['what is the bro version of huzz', 'who are those who knkow', 'is lebron james my sunshine', 'What is called when you look better than someone?', 'Put the still water down!', 'who is big sister general'];
let answerList = ['bruzz', 'balkans', 'yes', 'mogging', 'this is for those who know', 'kamala harris'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container')
const button = document.querySelector('.submit-button')
const input = document.querySelector('#input-feild')
let scoreContainer = document.querySelector('.score-container')

question.textContent = questionList[questionIndex]

let SubmitFunction = () =>{
    button.addEventListener('click', () =>{
        console.log("Button clicked");
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
        endGame();

    });
}

let endGame = () =>{
    if(questionIndex > 5){
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "6/6 im fried vro";
        input.style.display = "none";
        button.style.display = "none";
    }
}


SubmitFunction();