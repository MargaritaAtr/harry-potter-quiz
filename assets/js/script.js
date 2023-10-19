
// Ten questions and with four options of the answers for each question
const questions = [
    {
        question:"What is the name of Harry Potter's best friend?",
        answers: [
            { text :"Hermione Granger", correct: false},
            { text :"Draco Malfoy", correct: false},
            { text :"Ron Weasley", correct: true},
            { text :"Luna Lovegood", correct: false},
        ]
    },
    {
        question:"What magical sport is played on broomsticks in the wizarding world?",
        answers: [
            { text :"Broomstick Racing", correct: false},
            { text :"Wand Dueling", correct: false},
            { text :"Quidditch", correct: true},
            { text :"Potion Brewing", correct: false},
        ]
    },
    {
        question:"Who is the headmaster of Hogwarts during Harry Potter's time at school?",
        answers: [
            { text :"Rubeus Hagrid", correct: false},
            { text :"Severus Snape", correct: false},
            { text :"Albus Dumbledore", correct: true},
            { text :"Dolores Umbridge", correct: false},
        ]
    },
    {
        question:"What is the primary currency used in the wizarding world?",
        answers: [
            { text :"Galleons", correct: true},
            { text :"Dollars", correct: false},
            { text :"Euros", correct: false},
            { text :"Pounds", correct: false},
        ]
    },
    {
        question:"What is the core of Voldemort's wand?",
        answers: [
            { text :"Phoenix feather", correct: true},
            { text :"Dragon heartstring", correct: false},
            { text :"Thestral hair", correct: false},
            { text :"Veela hair", correct: false},
        ]
    },
    {
        question:"What is the name of the train that takes students to Hogwarts?",
        answers: [
            { text :"Knight Bus", correct: false},
            { text :"The Hogwarts Express", correct: true},
            { text :"The Floo Network", correct: false},
            { text :"The Broomstick Express", correct: false},
        ]
    },
    {
        question:"What spell is used to disarm an opponent and make them release whatever they are holding?",
        answers: [
            { text :"Expelliarmus", correct: true},
            { text :" Wingardium Leviosa", correct: false},
            { text :"Lumos", correct: false},
            { text :"Sectumsempra", correct: false},
        ]
    },
    {
        question:"What is the name of Harry's father?",
        answers: [
            { text :"James Potter", correct: true},
            { text :"Sirius Black", correct: false},
            { text :"Remus Lupin", correct: false},
            { text :"Peter Pettigrew", correct: false},
        ]
    },
    {
        question:"What object does Harry inherit from Sirius Black",
        answers: [
            { text :"A time-turner", correct: false},
            { text :"The Marauder's Map", correct: true},
            { text :"A broomstick", correct: false},
            { text :"A vanishing cabinet", correct: false},
        ]
    },
    {
        question:"What is the Marauder's Map used for?",
        answers: [
            { text :"Revealing the layout of Hogwarts and the location of people within it.", correct: true},
            { text :"Brewing powerful potions", correct: false},
            { text :"Flying without a broomstick", correct: false},
            { text :"aming magical creatures", correct: false},
        ]
    },
]
// The main variables used in the code

const question = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next');
const startButton = document.querySelector('.start-btn');
const quizContainer = document.querySelector('.container');
const welcomeScreen = document.querySelector ('.wrapper'); 
const audioPlayer = document.querySelector('.audio');

// Variable to store the score index and initial score

let currentQuestionIndex = 0;
let score = 0;

// Event listener with  click event  on "GO" button to change background image,shows quiz, audio player and start Quiz

startButton.addEventListener('click',function(){
    document.body.style.backgroundImage = 'linear-gradient(whitesmoke, rgba(0, 0, 0, 0.3)),url(assets/images/hagwards-castle.jpg)';
    welcomeScreen.classList.add('hide');
    quizContainer.classList.remove('hide');
    audioPlayer.classList.remove('hide');
    startQuiz();
});

// Function when load a window to display first screen with train image and hide quiz container and audio player

window.onload = function () {
    welcomeScreen.classList.remove('hide');
    quizContainer.classList.add('hide');
    audioPlayer.classList.add('hide');
   
 };
// Function to start quiz with first question and initial score to 0
 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    
 };
 // Function to show question with right index number and update text with relevant options of the answers on the button 
 // Event listener with click event for the selection of the answer. 

 function showQuestion(){
    resetQuiz();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
         button.addEventListener('click', selectAnswer); 
       
    });
 }
 // Function to clear the question with answers before displaying the next question

 function resetQuiz(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);  
    }
  
}

//Function to identify the option clicked by the user and check if answer is correct; 
// Higlight correct answer to green and wrong to red colour;
// To disable the buttons from selecting other answers when one was already selected;
// Show next button and increase a score if the correct answer selected;

function selectAnswer(x){
    const selectButton = x.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if(isCorrect) {
        selectButton.classList.add('correct');
        score++;
    }else{
        selectButton.classList.add('wrong');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
    
  }
// Function to show one by one  questions with answers; There are 10 questions in total
// When all questions answered , to show a score .

function selectNextButton(){
    currentQuestionIndex++;
    if ( currentQuestionIndex < questions.length){
        showQuestion();
       
    }else {
        showScore();
        
    }
}

// Event listeneter with click event for Next Button


nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        selectNextButton();
    }else{
        startQuiz();
        
    }
    
});

// Function to show score if all questions answered and three different messages come up depending on the score

function showScore(){
    resetQuiz();
    if (score === 10){
    question.innerHTML = `Yahoo! You answered ${score} out of ${questions.length}! You are the star!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    } else if (score <= 3){
        question.innerHTML = `Oh NO! It must be not your day today.. You answered ${score} out of ${questions.length}! Lets try again!`;
        nextButton.innerHTML = "Try Again";
        nextButton.style.display = "block";
    } else if ( score => 3 && score <10 ){
        question.innerHTML = `You are nearly there. Keep trying..You answered ${score} out of ${questions.length}! `;
        nextButton.innerHTML = "Try Again";
        nextButton.style.display = "block";
    }
    
} ;
