// script.js 
const questions = [ 
  { 
    question: "What is the capital of France?", 
    answers: ["Paris", "Rome", "Berlin", "Madrid"], 
    correctAnswer: "Paris" }, 
    { 
      question: "Which planet is known as the Red Planet?", 
      answers: ["Earth", "Venus", "Mars", "Jupiter"], 
      correctAnswer: "Mars" }, 
      { question: "Who wrote 'Hamlet'?", 
        answers: ["Shakespeare", "Homer", "Dante", "Tolstoy"], 
        correctAnswer: "Shakespeare" }, 
        { question: "What is the largest mammal?", 
          answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], 
          correctAnswer: "Blue Whale" } ]; 
          let currentQuestionIndex = 0; 
          let score = 0; 
          function startQuiz() {
             showQuestion(questions[currentQuestionIndex]); 
            } 
            function showQuestion(questionObj) {
               document.getElementById("question").textContent = questionObj.question; 
               const answerButtons = document.getElementById("answer-buttons"); 
               answerButtons.innerHTML = ""; 
               questionObj.answers.forEach(answer => { const button = document.createElement("button"); 
                button.textContent = answer; 
                button.onclick = () => selectAnswer(answer, questionObj.correctAnswer); 
                answerButtons.appendChild(button); }); 
              } 
              function selectAnswer(selectedAnswer, correctAnswer) {
                 if (selectedAnswer === correctAnswer) {
                   score++; 
                  } 
                  document.getElementById("next-btn").style.display = "block"; 
                  document.getElementById("score").textContent = `Score: ${score}/${questions.length}`; 
                } 
                function nextQuestion() {
                   currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) { 
                      showQuestion(questions[currentQuestionIndex]); 
                      document.getElementById("next-btn").style.display = "none"; 
                    } else {
                       showResults(); 
                      } } 
                      function showResults() { 
                        document.getElementById("question").textContent = "Quiz Complete!"; 
                        document.getElementById("answer-buttons").innerHTML = ""; 
                        document.getElementById("next-btn").style.display = "none"; 
                        document.getElementById("score").textContent = `Final Score: ${score}/${questions.length}`;
                       } 
                       startQuiz();