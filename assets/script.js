var Timer
var startQuiz = document.getElementById("startClick")
var question1 = document.getElementById("q1");
var question2
var question3
var question4
var question5
var directions
var timerEl = document.querySelector("#timer")
var secondsLeft =90
// var secondsLeft = 90;



function showQ1() {
    question1.style.display = "block";
    startQuiz.style.display = "none";
    
}






function gameTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = `Timer: ${secondsLeft}`;


    },1000)
        // if (secondsLeft === 0) {
        //     clearInterval(timerInterval);
        //     console.log(secondsLeft);
        // }

    // }, 1000)
    
    

}


// gameTime();



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




// function showQ2() {
//  question2= document.getElementById("q2")   
//    question1 = document.getElementById("q1");
//    question2.style.display ="block";
//    question1.style.display = "none";

//    }


//    function showQ1() {
//     startQuiz= document.getElementById("startClick")   
//    question1 = document.getElementById("q1");
//    question3.style.display ="block";
//    question2.style.display = "none";

//    }

//    function showQ1() {
//     startQuiz= document.getElementById("startClick")   
//    question1 = document.getElementById("q1");
//    question1.style.display ="block";
//    startQuiz.style.display = "none";

//    }

//    function showQ1() {
//     startQuiz= document.getElementById("startClick")   
//    question1 = document.getElementById("q1");
//    question1.style.display ="block";
//    startQuiz.style.display = "none";

//    }
