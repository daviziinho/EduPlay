// Perguntas do jogo
const questions = [
    {
        question: "📘 Qual é o principal objetivo da gamificação na educação?",
        options: [
            "Deixar tudo mais difícil",
            "Aumentar o engajamento dos alunos",
            "Remover métodos tradicionais de ensino",
            "Focar apenas em jogos"
        ],
        answer: 1
    },
    {
        question: "🎮 O que é um 'desafio' dentro da gamificação?",
        options: [
            "Uma tarefa ou missão a ser cumprida",
            "Um jogo completo",
            "Um prêmio dado ao aluno",
            "Uma prova tradicional"
        ],
        answer: 0
    },
    {
        question: "🏆 O que são recompensas na gamificação?",
        options: [
            "Castigos por erros",
            "Itens que deixam o jogo mais difícil",
            "Prêmios por boas ações ou acertos",
            "Aulas extras"
        ],
        answer: 2
    }
];

let currentQuestionIndex = 0;

// Seleção de elementos
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");

// Carregar pergunta
function loadQuestion() {
    const current = questions[currentQuestionIndex];
    questionElement.textContent = current.question;

    optionsContainer.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.style.display = "none";

    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// Verificar resposta
function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        feedbackElement.textContent = "✅ Resposta correta!";
        feedbackElement.style.color = "#00FF7F";
    } else {
        feedbackElement.textContent = "❌ Resposta incorreta!";
        feedbackElement.style.color = "#FF4C4C";
    }

    nextButton.style.display = "block";
}

// Próxima pergunta
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishGame();
    }
});

// Finalizar jogo
function finishGame() {
    questionElement.textContent = "🎉 Parabéns! Você completou todas as fases!";
    optionsContainer.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.style.display = "none";
}

// Inicia o jogo
loadQuestion();
