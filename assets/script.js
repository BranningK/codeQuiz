//Declaring HTML elements as variables

//Start button
    var startButton = document.querySelector('#startButton');
//Time display
    var timeLeft = document.querySelector('#timeLeft').style.display = 'none';
//Question box
    var questionBox = document.querySelector('#questionBox');
//Question text
    var question = document.querySelector('#question');
//Answer choice boxes
    var choiceBox1 = document.querySelector('#answer1').style.display = 'none';
    var choiceBox2 = document.querySelector('#answer2').style.display = 'none';
    var choiceBox3 = document.querySelector('#answer3').style.display = 'none';
    var choiceBox4 = document.querySelector('#answer4').style.display = 'none';
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
        startTimer();
        startQuiz();
    }

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
            sendMessage();
            }
        
        }, 1000);

    }
//Starts quiz
function startQuiz(){
    //Displays question 1
        showQuestion1();
        showChoices();
    //Checks if answer is correct or not
            if(answer = true) {
                console.log("Correct +5 points! ");
            } else {
                console.log("Incorrect -2 seconds ")
            }


    //Shows question 1
        function showQuestion1(){
    //Shows the question's text
            console.log('Question 1 displaying');
            question.textContent = "Example question text"
        }
    //Shows the answer boxes
            console.log('Showing the question answer choices');  
        function showChoices(){
            console.log('Showing answer choices');
            choiceBox1 = document.querySelector('#answer1').style.display = 'flex';
            choiceBox2 = document.querySelector('#answer2').style.display = 'flex';
            choiceBox3 = document.querySelector('#answer3').style.display = 'flex';
            choiceBox4 = document.querySelector('#answer4').style.display = 'flex';
    //Shows the user the answer choices
            answerChoice1.textContent = "asdf";
            answerChoice2.textContent = "asdf";
            answerChoice3.textContent = "asdf";
            answerChoice4.textContent = "asdf";
    //Ideas for answer verification
            //Contains (answer)
            //Answer = Boolean
        }



}

    