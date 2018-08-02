var startScreen;
var gameHTML;
var timer = 30;
var questArr = ["What is UT's rank amongst National Universities?", "What year was The University of Texas founded?","How many national championships have UT won since 1949?","The main campus consist of how many acres?","How many volumes do the UT libraires possess?", "UT offers how many study abroad programs?","How many UT students have won Olympic medals?"];
var ansArr = [["5th", "18th", "2nd", "20th"],["1883", "1794", "1962", "1833"], ["53", "74", "16", "31"], ["40", "10040", "375", "431"], ["250,000", "124,000", "10million", "3million"], ["800", "400", "1000", "225"], ["25", "150", "130", "75"]];
var imageArr = ["<img class='center-block img-right' src='../images/'uttop.png'>","<img class='center-block img-right' src='../images/'utfound.png'>", "<img class='center-block img-right' src='../images/'utgold.png'>","<img class='center-block img-right' src='../images/'utacre.png'>","<img class='center-block img-right'src='../images/'utlib.png'>","<img class='center-block img-right' src='../images/'utstudy.png'>","<img class='center-block img-right' src='../images/'utgold.png'>"];
var rightAns = ["B. #18th", "A. 1883", "A. 53", "D. 431", "C. 10million","B. 400", "C. 130"];
var questCount = 0;
var selectAns;
var theClock;
var correctPoll = 0;
var incorrectPoll = 0;
var unansweredPoll = 0;


$(document).ready(function() {
    
    
    function initialScreen() {
        startScreen = "<p class='display-4 main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".midSection").html(startScreen);
    }
    
    initialScreen();
    
    
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
       
        generateHTML();
    
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer", function(event){

        clickSound.play();
        
        
        selectAns = $(this).text();
        if(selectAns === rightAns[questCount]) {
            //alert("correct");
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        
        // resetGame();
    }); 
    
    }); 
    function generateLossDueToTimeOut() {
        unansweredPoll++;
        gameHTML = "<p class='display-4 timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='display-4'>You ran out of time!  The correct answer was: " + rightAns[questCount] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".midSection").html(gameHTML);
        setTimeout(wait, 4000);  
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='display-4 timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='display-4'>Correct! The answer is: " + rightAns[questCount] + "</p>" + imageArr[questCount];
        $(".midSection").html(gameHTML);
        setTimeout(wait, 4000);  
    }
    
    function generateLoss() {
        incorrectPoll++;
        gameHTML = "<p class='display-4 timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='display-4'>Wrong! The correct answer is: "+ rightAns[questCount] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".midSection").html(gameHTML);
        setTimeout(wait, 4000); 
    }
    
    function generateHTML() {
        gameHTML = "<p class='display-4 timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='display-4'>" + questArr[questCount] + "</p><p class='first-answer answer'>A. " + ansArr[questCount][0] + "</p><p class='answer'>B. "+ansArr[questCount][1]+"</p><p class='answer'>C. "+ansArr[questCount][2]+"</p><p class='answer'>D. "+ansArr[questCount][3]+"</p>";
        $(".midSection").html(gameHTML);
    }
    
    function wait() {
        if (questCount < 7) {
        questCount++;
        generateHTML();
        timer = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (timer === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (timer > 0) {
                timer--;
            }
            $(".timer").html(count);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='display-4 timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctPoll + "</p>" + "<p>Wrong Answers: " + incorrectPoll + "</p>" + "<p>Unanswered: " + unansweredPoll + "</p>" + "<p class='display-4 reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".midSection").html(gameHTML);
    }
    
    function resetGame() {
        questCount = 0;
        correctPoll = 0;
        incorrectPoll = 0;
        unansweredPoll = 0;
        timer = 30;
        generateHTML();
        timerWrapper();
    }

    
    













































