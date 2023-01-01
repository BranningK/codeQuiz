//Declaring HTML elements as variables

//Start button
var startButton = document.querySelector('#startButton');
//Time display
document.querySelector('#timeLeft').style.display = 'none';
//High scores
var highScores = document.querySelector('#highScores');
highScores.addEventListener("click", endScreen)
//Question box
var questionBox = document.querySelector('#questionBox');
//Question text
var question = document.querySelector('#question');
//Answer choice boxes
document.querySelector('#answerChoice1').style.display = 'none';
document.querySelector('#answerChoice2').style.display = 'none';
document.querySelector('#answerChoice3').style.display = 'none';
document.querySelector('#answerChoice4').style.display = 'none';
//Answer choice text
var answerChoice1 = document.querySelector('#answerChoice1');
var answerChoice2 = document.querySelector('#answerChoice2');
var answerChoice3 = document.querySelector('#answerChoice3');
var answerChoice4 = document.querySelector('#answerChoice4');
//Starting time in seconds
var secondsLeft = 30;

//Adds event listener to start button and ties it to the beginQuiz() function
startButton.addEventListener("click", beginQuiz);
//Starts quiz and begins the timer
function beginQuiz(event) {
    console.log('Starting Quiz');
    event.preventDefault();
    hideStartBtn();
    event.preventDefault();
    startTimer();
    event.preventDefault();
    startQuiz();
    event.preventDefault();
}

    
//Starts quiz
function startQuiz(){
    //Displays question 1
    question1();
    //Defines how to display question 1    
    function question1(){
        console.log('Question 1 displaying');
        showChoices();
    //Shows the question's text
        question.textContent = "Example question text";

    //Shows the answer boxes
        function showChoices(){
            console.log('Showing question 1 answer choices');
            document.querySelector('#answerChoice1').style.display = 'flex';
            document.querySelector('#answerChoice2').style.display = 'flex';
            document.querySelector('#answerChoice3').style.display = 'flex';
            document.querySelector('#answerChoice4').style.display = 'flex';
        //Shows the user the answer choices
            text1.textContent = "1. AAAA";
            text2.textContent = "2. BBBB";
            text3.textContent = "3. CCCC";
            text4.textContent = "4. DDDD";
        //Event listeners for the answer boxes
            answerChoice1.addEventListener("click", checkAnswer1);
            answerChoice2.addEventListener("click", checkAnswer1);
            answerChoice3.addEventListener("click", checkAnswer1);
            answerChoice4.addEventListener("click", checkAnswer1);
        }            
    
    }
    //verifies the answer of question 1
    function checkAnswer1(event) {
        if(event.target !== answerChoice3) {
            console.log("Answer 1 Incorrect -2 seconds ");
            secondsLeft --;
        } else {
            console.log("Correct! ");
        //insert points to local storage
        }
        answerChoice1.removeEventListener('click', checkAnswer1);
        answerChoice2.removeEventListener('click', checkAnswer1);
        answerChoice3.removeEventListener('click', checkAnswer1);
        answerChoice4.removeEventListener('click', checkAnswer1);
        question2();
    }

    function question2(){
        showChoices2();
        question.textContent = "Example question2 text";

        //Shows the answer boxes
        function showChoices2(){
            console.log('Showing question2 answer choices');
            document.querySelector('#answerChoice1').style.display = 'flex';
            document.querySelector('#answerChoice2').style.display = 'flex';
            document.querySelector('#answerChoice3').style.display = 'flex';
            document.querySelector('#answerChoice4').style.display = 'flex';
        //Shows the user the answer choices
            text1.textContent = "1. AAAAa";
            text2.textContent = "2. BBBBb";
            text3.textContent = "3. CCCCc";
            text4.textContent = "4. DDDDd";
        //Event listeners for the answer boxes
            answerChoice1.addEventListener("click", checkAnswer2);
            answerChoice2.addEventListener("click", checkAnswer2);
            answerChoice3.addEventListener("click", checkAnswer2);
            answerChoice4.addEventListener("click", checkAnswer2);
        }
    }
    //verifies the answer of question 2
    function checkAnswer2(event) {
        if(event.target !== answerChoice1) {
            console.log("Answer 2 Incorrect -2 seconds ");
            secondsLeft --;
            } else {
            console.log("Correct! ");
            //insert points to local storage        
        }
        answerChoice1.removeEventListener('click', checkAnswer2);
        answerChoice2.removeEventListener('click', checkAnswer2);
        answerChoice3.removeEventListener('click', checkAnswer2);
        answerChoice4.removeEventListener('click', checkAnswer2);
        question3();
    }
    function question3() {
        showChoices3();
        question.textContent = "Example question3 text";

        //Shows the answer boxes
        function showChoices3(){
            console.log('Showing question3 answer choices');
            document.querySelector('#answerChoice1').style.display = 'flex';
            document.querySelector('#answerChoice2').style.display = 'flex';
            document.querySelector('#answerChoice3').style.display = 'flex';
            document.querySelector('#answerChoice4').style.display = 'flex';
        //Shows the user the answer choices
            text1.textContent = "1. AAAAa";
            text2.textContent = "2. BBBBb";
            text3.textContent = "3. CCCCc";
            text4.textContent = "4. DDDDd";
        //Event listeners for the answer boxes
            answerChoice1.addEventListener("click", checkAnswer3);
            answerChoice2.addEventListener("click", checkAnswer3);
            answerChoice3.addEventListener("click", checkAnswer3);
            answerChoice4.addEventListener("click", checkAnswer3);
        }
    }
    //verifies the answer of question 3
    function checkAnswer3(event) {
        if(event.target !== answerChoice4) {
            console.log("Incorrect -2 seconds ");
            secondsLeft --;
            } else {
            console.log("Correct! ");
            //insert points to local storage
        }
        answerChoice1.removeEventListener('click', checkAnswer3);
        answerChoice2.removeEventListener('click', checkAnswer3);
        answerChoice3.removeEventListener('click', checkAnswer3);
        answerChoice4.removeEventListener('click', checkAnswer3);
        question4();
    }
    function question4(){
        showChoices4();
        question.textContent = "Example question4 text";

        //Shows the answer boxes
        function showChoices4(){
            console.log('Showing question4 answer choices');
            document.querySelector('#answerChoice1').style.display = 'flex';
            document.querySelector('#answerChoice2').style.display = 'flex';
            document.querySelector('#answerChoice3').style.display = 'flex';
            document.querySelector('#answerChoice4').style.display = 'flex';
        //Shows the user the answer choices
            text1.textContent = "1. AAAAa";
            text2.textContent = "2. BBBBb";
            text3.textContent = "3. CCCCc";
            text4.textContent = "4. DDDDd";
        //Event listeners for the answer boxes
            answerChoice1.addEventListener("click", checkAnswer4);
            answerChoice2.addEventListener("click", checkAnswer4);
            answerChoice3.addEventListener("click", checkAnswer4);
            answerChoice4.addEventListener("click", checkAnswer4);
        }
    }
    //verifies the answer of question 4
    function checkAnswer4(event) {
        if(event.target !== answerChoice4) {
            console.log("Incorrect -2 seconds ");
            secondsLeft --;
            } else {
            console.log("Correct! ");
            //insert points to local storage            
        }
        answerChoice1.removeEventListener('click', checkAnswer4);
        answerChoice2.removeEventListener('click', checkAnswer4);
        answerChoice3.removeEventListener('click', checkAnswer4);
        answerChoice4.removeEventListener('click', checkAnswer4);
        question5();
    }
    function question5(){
        showChoices5();
        question.textContent = "Example question5 text";

        //Shows the answer boxes
        function showChoices5(){
            console.log('Showing question5 answer choices');
            document.querySelector('#answerChoice1').style.display = 'flex';
            document.querySelector('#answerChoice2').style.display = 'flex';
            document.querySelector('#answerChoice3').style.display = 'flex';
            document.querySelector('#answerChoice4').style.display = 'flex';
        //Shows the user the answer choices
            text1.textContent = "1. AAAAa";
            text2.textContent = "2. BBBBb";
            text3.textContent = "3. CCCCc";
            text4.textContent = "4. DDDDd";
        //Event listeners for the answer boxes
            answerChoice1.addEventListener("click", checkAnswer5);
            answerChoice2.addEventListener("click", checkAnswer5);
            answerChoice3.addEventListener("click", checkAnswer5);
            answerChoice4.addEventListener("click", checkAnswer5);
        }
    }
    //verifies the answer of question 5
    function checkAnswer5(event) {
        if(event.target !== answerChoice4) {
            console.log("Incorrect -2 seconds ");
            secondsLeft --;
            } else {
            console.log("Correct! ");
            //insert points to local storage                   
        }
        answerChoice1.removeEventListener('click', checkAnswer5);
        answerChoice2.removeEventListener('click', checkAnswer5);
        answerChoice3.removeEventListener('click', checkAnswer5);
        answerChoice4.removeEventListener('click', checkAnswer5);
        endScreen();
    }
}

//List of functions------------------------------------------------------------------

//Hides the start button
function hideStartBtn(){
    startButton.style.display = 'none';
    console.log("Start button hidden"); 
}
//Starts timer
function startTimer() {
    console.log(secondsLeft + " seconds, go!");
    document.querySelector('#timeLeft').style.display = 'flex';

    var timerInterval = setInterval(function() {
        secondsLeft--;
        document.querySelector('#timeLeft').textContent = secondsLeft + " seconds left.";
    
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        console.log('Time is up');
        }
    }, 1000);
}
//End screen
function endScreen(){
    console.log("hold on man im getting there");
    //Hiding all of the elements
    document.querySelector('#answerChoice1').style.display = 'none';
    document.querySelector('#answerChoice2').style.display = 'none';
    document.querySelector('#answerChoice3').style.display = 'none';
    document.querySelector('#answerChoice4').style.display = 'none';
    document.querySelector('#timeLeft').style.display = 'none';
    document.querySelector('#question').style.display = 'none';
    document.querySelector('#startButton').style.display = 'none';
    document.querySelector('#h2El').textContent = "High Scores";
    scoreScreen;
}

function scoreScreen() {
    const para = document.createElement('p');
    const paraText = document.createTextNode("asdf");
    para.appendChild(paraText);
    questionBox.appendChild(para);
}