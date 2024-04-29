type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
};

let indicePerguntaAtual = 0;
let pontuacaoCorreta = 0; 
let pontuacaoErrada = 0;
let containerResultado: HTMLElement | null;
let containerBotoes: HTMLElement | null;
let btnRestart: HTMLElement | null;

 const questions: Question[] = [
    {
        question: "Qual foi o primeiro console do mundo?",
        options: ["Dynavision", "Atari", "Magnavox Odyssey", "Sega"],
        correctAnswer: "Magnavox Odyssey"
    },
    {
        question: "Quando surgiu o primeiro RPG'?",
        options: ["1955", "1968", "1974", "1980"],
        correctAnswer: "1974"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Júpiter", "Saturno", "Netuno", "Terra"],
        correctAnswer: "Júpiter"
    },
    {
        question: "Qual é o ano em que a primeira guerra mundial começou?",
        options: ["1914", "1918", "1939", "1945"],
        correctAnswer: "1914"
    },
    {
        question: "Quem pintou o Nascimento de Vênus?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Sandro Botticelli", "Michelangelo"],
        correctAnswer: "Sandro Botticelli"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        correctAnswer: "Oceano Pacífico"
    },
    {
        question: "Quem criou a igreja anglicana?",
        options: ["Agostinho de Hipona", "Henrique VIII", "Tertuliano", "Tomás Cranmer"],
        correctAnswer: "Henrique VIII"
    },
    {
        question: "O Malleus Maleficarum, de Heinrich Kraemer foi muito utilizado para qual propósito?",
        options: ["Na prática de catecismo", "Leitura comum para rituais pagãos", "Tornou-se o guia dos inquisidores", 
        "Um trecho de pergaminho perdio de, Hypátia"],
        correctAnswer: "Tornou-se o guia dos inquisidores"
    },
];

// Apresenta uma pergunta e recebe a resposta
function apresentarPergunta(pergunta: Question): void {
    const { question: q, options } = pergunta;
    const opcoesHtml = options
        .map((opcao, index) => `<input type="radio" name="resposta" value="${opcao}" id="opcao${index + 1}"><label for="opcao${index + 1}">${opcao}</label>`)
        .join("<br>");

    const containerPergunta = document.getElementById("question-container");
    if (containerPergunta) {
        containerPergunta.innerHTML = `<div>${q}</div><div>${opcoesHtml}</div>`;
    }

    const botaoProximaPergunta = document.getElementById("next-btn");
    if (botaoProximaPergunta) {
        botaoProximaPergunta.addEventListener("click", () => {
            const opcaoSelecionada = document.querySelector('input[name="resposta"]:checked') as HTMLInputElement | null;
            const respostaUsuario = opcaoSelecionada ? opcaoSelecionada.value : "";
            verificarResposta(respostaUsuario, pergunta.correctAnswer);
        });
    }
}

// Verifica a resposta do usuario
function verificarResposta(respostaUsuario: string, respostaCorreta: string) {
    if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
        console.log("Resposta correta!");
        pontuacaoCorreta++;
    }

    // Avança para a próxima pergunta ou finaliza o quiz
    indicePerguntaAtual++;
    if (indicePerguntaAtual < questions.length) {
        apresentarPergunta(questions[indicePerguntaAtual]);
    } else {
        finalizarQuiz();
    }
}

// Finaliza o quiz e mostra a pontuação
function finalizarQuiz() {
    const containerResultado = document.getElementById("resultado-container");
    if (containerResultado) {
        containerResultado.innerHTML = `Fim do quiz! Pontuação final:\n Corretas: ${pontuacaoCorreta}\nErradas: ${pontuacaoErrada}`;
        containerResultado.style.display = "block";
    }

    const containerBotoes = document.getElementById("buttons-container");
    if (containerBotoes) {
        containerBotoes.style.display = "none";
    }
}


function reiniciarQuiz(): void {
    indicePerguntaAtual = 0;
    pontuacaoCorreta = 0;
    pontuacaoErrada = 0;
    if (containerResultado) {
        containerResultado.style.display = "none";
    }
    if (containerBotoes) {
        containerBotoes.style.display = "block";
    }
    iniciarQuiz();
}

function iniciarQuiz() {
    apresentarPergunta(questions[indicePerguntaAtual]);
}

window.addEventListener("DOMContentLoaded", () => {
    containerResultado = document.getElementById("resultado-container");
    containerBotoes = document.getElementById("buttons-container");
    btnRestart = document.getElementById("restart-btn");

    if (btnRestart) {
        btnRestart.addEventListener("click", reiniciarQuiz);
    }

    iniciarQuiz();
});