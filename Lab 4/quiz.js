// debug message to confirm file loaded
console.log("quiz.js loaded");

// Prompt Quizzer - A Console Based Quiz Game

const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "Which language runs in a web browser?", answer: "javascript" },
  { question: "What does CPU stand for?", answer: "central processing unit" },
  { question: "Which company developed Java?", answer: "sun microsystems" },
  { question: "What is the full form of HTML?", answer: "hypertext markup language" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled!");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("✅ Correct!");
    } else {
      alert("❌ Wrong!\nCorrect answer is: " + quizQuestions[i].answer);
    }
  }

  alert("🎉 Quiz Completed!\nYour Score: " + score + " out of " + quizQuestions.length);
}

// use onload to be extra safe (runs after page load)
window.addEventListener("load", runQuiz);