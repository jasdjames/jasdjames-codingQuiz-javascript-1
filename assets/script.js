var Timer
var startQuiz = document.getElementById("startClick");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var question5 = document.getElementById("q5");
var scoreSheet = document.getElementById("page2");
var timerEl = document.querySelector("#timer");
var secondsLeft = 90
var initials = document.getElementById("initials");
var points = document.getElementById("score");
var scoreNum = document.getElementById("scoreNum")
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var questions = document.querySelectorAll(".btn-outline-primary").value
var clickThruQ = ["clickQ2", "clickQ3", "click4", "click5"];
var allAns = document.getElementsByClassName("btn-outline-primary")

for (i = 0; i < allAns.length; i++) {
    allAns[i].addEventListener("click", selectAns)

}
scoreNum = 0;
// Will Utterback assisted me with this function 
function selectAns(event) {
    var userClick = event.target.value;
    console.log(event.target.value)
    if (userClick === "2") {
        alert("correct");
        scoreNum += 10;
        console.log(scoreNum);
        alert(`Your score is ${scoreNum}`)

    } else {

        secondsLeft -= 10;
        scoreNum.innerHTML = points;
        alert("incorrect");

    }

    var viewScore = document.getElementById("oldScoreHere")

    viewScore.innerHTML = `<p> Your score is ${scoreNum} </p>`;
};

function showQ1() {
    question1.style.display = "block";
    startQuiz.style.display = "none";

}
function gameTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = `Timer: ${secondsLeft}`;


        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log(secondsLeft);
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            question5.style.display = "none";
            scoreSheet.classList.remove("d-none");
        }

    }, 1000)

};    
    function showQ2(event) {
        question1.style.display = "none";
        question2.style.display = "block";

    }


    function showQ3(event) {
        question2.style.display = "none";
        question3.style.display = "block";

    };

    function showQ4(event) {
        question3.style.display = "none";
        question4.style.display = "block";

    };

    function showQ5(event) {
        question4.style.display = "none";
        question5.style.display = "block";

    };

    function showScore(event) {
        question5.style.display = "none";
        timerEl.style.display = "none";
        scoreSheet.classList.remove("d-none");

    }
    var buttonSubmit = document.getElementById("form-submit");
    buttonSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        if (buttonSubmit.value === "submit") {
            // points.value = scoreNum;


            localStorage.setItem("initials", initials.value);
            localStorage.setItem("points", scoreNum);


            page3.innerHTML = `
            <h2>Thank you for playing  ${localStorage.getItem("initials")} ! Your score of ${localStorage.getItem("points")} has been stored. Please play again!  </h2>`;
            var playAgain = document.createElement("button");
            playAgain.value = "play-again";
            playAgain.textContent = "Play Again";
            playAgain.style.margin = "2rem";
            playAgain.classList.add("card-footer", "btn", "btn-outline-primary");
            page3.appendChild(playAgain);
            playAgain.addEventListener("click", function (event) {
                location.reload();
            })
        }
    });

