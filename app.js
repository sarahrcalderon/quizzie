var indicePerguntaAtual = 0;
var pontuacao = 0;
var containerResultado;
var containerBotoes;
var btnRestart;
var questions = [
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
    }
];
// Apresenta uma pergunta e recebe a resposta
function apresentarPergunta(pergunta) {
    var q = pergunta.question, options = pergunta.options;
    var opcoesHtml = options
        .map(function (opcao, index) { return "<input type=\"radio\" name=\"resposta\" value=\"".concat(opcao, "\" id=\"opcao").concat(index + 1, "\"><label for=\"opcao").concat(index + 1, "\">").concat(opcao, "</label>"); })
        .join("<br>");
    var containerPergunta = document.getElementById("question-container");
    if (containerPergunta) {
        containerPergunta.innerHTML = "<div>".concat(q, "</div><div>").concat(opcoesHtml, "</div>");
    }
    var botaoProximaPergunta = document.getElementById("next-btn");
    if (botaoProximaPergunta) {
        botaoProximaPergunta.addEventListener("click", function () {
            var opcaoSelecionada = document.querySelector('input[name="resposta"]:checked');
            var respostaUsuario = opcaoSelecionada ? opcaoSelecionada.value : "";
            verificarResposta(respostaUsuario, pergunta.correctAnswer);
            // Avança para a próxima pergunta
            indicePerguntaAtual++;
            if (indicePerguntaAtual < questions.length) {
                apresentarPergunta(questions[indicePerguntaAtual]);
            }
            else {
                finalizarQuiz();
            }
        });
    }
}
// Verifica a resposta do usuario
function verificarResposta(respostaUsuario, respostaCorreta) {
    if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
        console.log("Resposta correta!");
        pontuacao++;
    }
    else {
        console.log("Resposta incorreta. A resposta correta era: ".concat(respostaCorreta));
    }
}
// Finaliza o quiz e mostra a pontuação
function finalizarQuiz() {
    var containerResultado = document.getElementById("resultado-container");
    if (containerResultado) {
        containerResultado.innerHTML = "Fim do quiz! Sua pontua\u00E7\u00E3o final \u00E9: ".concat(pontuacao, "/").concat(questions.length);
        containerResultado.style.display = "block";
    }
    var containerBotoes = document.getElementById("buttons-container");
    if (containerBotoes) {
        containerBotoes.style.display = "none";
    }
}
function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
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
window.addEventListener("DOMContentLoaded", function () {
    containerResultado = document.getElementById("resultado-container");
    containerBotoes = document.getElementById("buttons-container");
    btnRestart = document.getElementById("restart-btn");
    if (btnRestart) {
        btnRestart.addEventListener("click", reiniciarQuiz);
    }
    iniciarQuiz();
});
