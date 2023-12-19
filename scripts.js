const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Brasília",
  },
  {
    question: "Quantos planetas existem no sistema solar?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8",
  },
  {
    question: "Quem escreveu 'Dom Quixote'?",
    options: ["William Shakespeare", "Miguel de Cervantes", "Charles Dickens", "Fiodor Dostoiévski"],
    correctAnswer: "Miguel de Cervantes",
  },
  {
    question: "Em que ano a Independência do Brasil foi proclamada?",
    options: ["1808", "1822", "1845", "1889"],
    correctAnswer: "1822",
  },
  {
    question: "Qual é o maior animal terrestre?",
    options: ["Elefante Africano", "Girafa", "Hipopótamo", "Rinoceronte"],
    correctAnswer: "Elefante Africano",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Antártico", "Pacífico"],
    correctAnswer: "Pacífico",
  },
  {
    question: "Quem é o autor de 'Romeu e Julieta'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "Qual é o símbolo químico do ouro?",
    options: ["O", "Au", "Ag", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "Quantos lados tem um hexágono?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
];

let currentUser = {};
let currentQuestionIndex = 0;
let startTime, endTime;

function startQuiz() {
  currentUser = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    matricula: document.getElementById("matricula").value,
  };

  document.getElementById("registration-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";

  showQuestion();
}

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  questionContainer.innerHTML = questions[currentQuestionIndex].question;
  optionsContainer.innerHTML = "";

  const options = questions[currentQuestionIndex].options;
  for (let i = 0; i < options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.textContent = options[i];
    optionButton.onclick = function () {
      checkAnswer(options[i]);
    };
    optionsContainer.appendChild(optionButton);
  }

  startTime = new Date();

  setTimeout(() => {
    checkAnswer(false);
  }, 10000);
}

function checkAnswer(userAnswer) {
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000;

  const isCorrect = userAnswer === questions[currentQuestionIndex].correctAnswer;

  // Lógica para atualizar pontuação e tempo no banco de dados (usando Firebase, por exemplo)

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    displayResults();
  }
}

function displayResults() {
  // Lógica para exibir a pontuação final e o ranking
  const quizScreen = document.getElementById("quiz-screen");
  quizScreen.innerHTML = `<h2>Parabéns, ${currentUser.name} ${currentUser.surname}!</h2>
    <p>Pontuação: [Sua Lógica de Pontuação]</p>
    <p>Tempo Total: [Sua Lógica de Tempo]</p>
    <button onclick="location.reload()">Reiniciar Quiz</button>`;
}
