var Timer
var startQuiz = document.getElementById("startClick");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var question5 = document.getElementById("q5");
var directions
var timerEl = document.querySelector("#timer");
var secondsLeft = 90
var playerGuess
// var correctAn = element.value="1";

var clickThruQ = ["clickQ2","clickQ3", "click4", "click5"];

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
        }
    
    },1000)
    

// There is a loop that I could clean this up with

}
function showQ2 (event){
   question1.style.display = "none";
   question2.style.display = "block"; 

};


function showQ3 (event){
    question2.style.display = "none";
    question3.style.display = "block"; 
 
 };

 function showQ4 (event){
    question3.style.display = "none";
    question4.style.display = "block"; 
 
 };

 function showQ5 (event){
    question4.style.display = "none";
    question5.style.display = "block"; 
 
 };


//  clickThruQ = document.querySelector(".btn-outline-primary");
//  clickThruQ.addEventListener("click",function clickThru(event) {
// for (let i=0; i < clickThruQ.length; i++) {
//  clickThruQ = ([i].style.display ="block"); 
//  }
// })

 



// function clearSection(event) 
// question1=document.getElementById(q1)
// question1.addEventListener('click')

// function startQuiz(event) {
//     question1=document.getElementById("q1")
//     if (question1.style.display === "none") {
//         question1.style.display = "block";
//     } else {
//       question1.style.display = "none";
//     }
//   }




