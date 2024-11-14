let questionList = ['what is skibidi toilet', 'who is skibidi toilet', 'why is skibidi toilet'];
let answerList = ['skibidi', 'skibidi', 'skibidi'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container')
const button = document.querySelector('.question-container')
const input = document.querySelector('#input-feild')
let scoreContainer = document.querySelector('.score-container')

question.textContent = questionList[questionIndex]

let SubmitFunction = () =>{
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
        //PUT ENDGAME FUNCTION HERE
    });
}

let endGame = () =>{
    if(questionIndex > 2){
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Congradulations, play again!";

    }
}