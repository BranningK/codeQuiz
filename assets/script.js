//Declaring HTML elements as variables

//Start button
    var startButton = document.querySelector('#startButton');
//Time display
    document.querySelector('#timeLeft').style.display = 'none';
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
        console.log('Question 1 displaying');
        // showChoices();
        // console.log('Showing the question answer choices');  
    //Checks if answer is correct or not
        // checkAnswer();
        // console.log('Checking Answer');


    //Shows question 1
        function question1(){
            showChoices();
    //Shows the question's text
            question.textContent = "Example question text" 
            // answer = answerChoice3

            //Shows the answer boxes
                function showChoices(){
                    console.log('Showing answer choices');
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
}
//Need to add a points storage object in the local storage!!!!!!

function checkAnswer1(event) {
    if(event.target !== answerChoice3) {
        console.log("Incorrect -2 seconds ");
        secondsLeft --;
    } else {
        console.log("Correct! ");
        //insert points to local storage
    }
}

// var answer1 = answerChoice3
//List of functions

//Hides the start button
function hideStartBtn(){
    startButton.style.display = 'none';
    console.log("Start button hidden"); 
}
//Starts timer
function startTimer() {
    console.log(secondsLeft + " seconds left.");
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

