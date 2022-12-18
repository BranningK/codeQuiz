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
    var answerChoice1 = document.querySelector('#answerChoice1').style.display = 'none';
    var answerChoice2 = document.querySelector('#answerChoice2').style.display = 'none';
    var answerChoice3 = document.querySelector('#answerChoice3').style.display = 'none';
    var answerChoice4 = document.querySelector('#answerChoice4').style.display = 'none';
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
        console.log('Question 1 displaying');
        showChoices();
        console.log('Showing the question answer choices');  
    //Checks if answer is correct or not
            if(answer = true) {
                console.log("Correct! ");
            } else {
                console.log("Incorrect -2 seconds ")
                secondsLeft -2;
            }


    //Shows question 1
        function showQuestion1(){
    //Shows the question's text
            question.textContent = "Example question text"
        }
    //Shows the answer boxes
        function showChoices(){
            console.log('Showing answer choices');
            answerChoice1 = document.querySelector('#answerChoice1').style.display = 'flex';
            answerChoice2 = document.querySelector('#answerChoice2').style.display = 'flex';
            answerChoice3 = document.querySelector('#answerChoice3').style.display = 'flex';
            answerChoice4 = document.querySelector('#answerChoice4').style.display = 'flex';
    //Shows the user the answer choices
            text1.textContent = "asdf";
            text2.textContent = "asdf";
            text3.textContent = "asdf";
            text4.textContent = "asdf";
    //Event listeners for the answer boxes
            answerChoice1.addEventListener("click", function(event){
                event.stopPropogation();

                console.log("yuhhhh")
            });
            // text2.addEventListener("click", function(event));
            // text3.addEventListener("click", function(event));
            // text4.addEventListener("click", function(event));
            

            
    //Ideas for answer verification
            //Contains (answer)
            //Answer = Boolean
            //if <answerChoice> correct, else wrong -- maybe best bet?
        }



}

    