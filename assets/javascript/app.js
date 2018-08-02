var startScreen;
var gameHTML;
var timer = 30;
var questArr = ["What is UT's rank amongst National Universities?", "What year was The University of Texas founded?","How many national championships have UT won since 1949?","The main campus consist of how many acres?","How many volumes do the UT libraires possess?", "UT offers how many study abroad programs?","How many UT students have won Olympic medals?"];
var ansArr = [["5th", "18th", "2nd", "20th"],["1883", "1794", "1962", "1883"], ["53", "74", "16", "31"], ["40", "10040", "375", "431"], ["250,000", "124,000", "10million", "3million"], ["800", "400", "1000", "225"], ["25", "150", "130", "75"]];
var imageArr = ["<img src='assets/images/'uttop.png'>","<img src='assets/images/'utfound.png'>", "<img src='assets/images/'utgold.png'>","<img src='assets/images/'utacre.png'>","<img src='assets/images/'utlib.png'>","<img src='assets/images/'utstudy.png'>","<img src='assets/images/'utgold.png'>"];
var rightAns = ["B. #18th", "A. 1883", "A. 53", "D. 431", "C. 10million","B. 400", "C. 130"];
var questCount = 0;
var selectAns;
var theTimer;
var correctPoll = 0;
var incorrectPoll = 0;
var unansweredPoll = 0;


$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  // added line to test issue on GitHub Viewer
        
        generateHTML();
    
        timerWrapper();
    
    }); // Closes start-button click
    
    $("body").on("click", ".answer", function(event){
        //answeredQuestion = true;
        
        selectAns = $(this).text();
        if(selectAns === rightAns[questCount]) {
            //alert("correct");
    
            clearInterval(theTimer);
            generateWin();
        }
        else {
            //alert("wrong answer!");
            clearInterval(theTimer);
            generateLoss();
        }
    }); // Close .answer click
    
    $("body").on("click", ".reset-button", function(event){
        
        resetGame();
    }); // Closes reset-button click
    
    });  //  Closes jQuery wrapper
    
    function generateLossDueToTimeOut() {
        unansweredPoll++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + rightAns[questCount] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  //  change to 4000 or other amount
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + rightAns[questCount] + "</p>" + imageArr[questCount];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  //  change to 4000 or other amount
    }
    
    function generateLoss() {
        incorrectPoll++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ rightAns[questCount] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); //  change to 4000 or other amount
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questArr[questCount] + "</p><p class='first-answer answer'>A. " + ansArr[questCount][0] + "</p><p class='answer'>B. "+ansArr[questCount][1]+"</p><p class='answer'>C. "+ansArr[questCount][2]+"</p><p class='answer'>D. "+ansArr[questCount][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questCount < 7) {
        questCount++;
        generateHTML();
        count = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theTimer = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (count === 0) {
                clearInterval(theTimer);
                generateLossDueToTimeOut();
            }
            if (count > 0) {
                count--;
            }
            $(".timer").html(count);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctPoll + "</p>" + "<p>Wrong Answers: " + incorrectPoll + "</p>" + "<p>Unanswered: " + unansweredPoll + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questCount = 0;
        correctPoll = 0;
        incorrectPoll = 0;
        unansweredPoll = 0;
        count = 30;
        generateHTML();
        timerWrapper();
    }
    













































// $(document).ready(function() {

//     function initialScreen() {
//         startScreen = "<p class='display-4 main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
//         $(".mainArea").html(startScreen);

//     }

//     initialScreen();

//     $("body").on("click", ".start-button", function(event){
//         event.preventDefault();
//         generateHTML();

//         timeWrapper();
//     });

//     $("body").on("click", ".answer", function(event){
//         selectAns = $(this).text();
//         if(selectAns === rightAns[questCount]) {

//             clearInterval(theTimer);
//             generateWin();
//         }
//         else {
//             clearInterval(theTimer);
//             generateLoss();
//         }
//     });

//     $("body").on("click", ".reset-button", function(event){
//         resetGame();
//     });
// });

// function lossDueToTimeOut() {
//     unansweredPoll++;
//     gameHTML = "<p class='display-4 timer-p'> Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + rightAns[questCount] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000);
// }

// function addWin() {
//     correctPoll++;
//     gameHTML ="<p class='display-4 timer-sp'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + rightAns[questCount] + "</p>" + imageArr[questCount];
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000);
// }
// function addLoss() {
//     correctPoll++;
//     gameHTMl = "class='display-4 timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ rightAns[questCount] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000);
// }
// function generateHTML() {
//     gameHTML = "class='display-4 timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questArr[questCount] + "</p><p class='first-answer answer'>A. " + ansArr[questCount][0] + "</p><p class='answer'>B. "+ansArr[questCount][1]+"</p><p class='answer'>C. "+ansArr[questCount][2]+"</p><p class='answer'>D. "+ansArr[questCount][3]+"</p>";
// 	$(".mainArea").html(gameHTML);
// }
// function wait() {
//     if (questCount < 7) {
//         questCount++;
//         generateHTML();
//         count = 30;
//         timeWrapper();
//     }
//     else {
//         finalScreen();
//     }
// }

// function timeWrapper() {
//     theTimer = setInterval(thirtySeconds, 1000);
//     function thirtySeconds() {
//         if (count === 0) {
//             clearInterval(theTimer);
//             lossDueToTimeOut();
//         }
//         if (count > 0) {
//             count--;
//         }
//         $(".timer").html(count);
//     }
// }