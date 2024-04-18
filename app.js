// Perguntas
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
// apresenta uma pergunta e receber a resposta
function askQuestion(question) {
    var q = question.question, options = question.options;
    var optionsStr = options.map(function (option, index) { return "".concat(index + 1, ". ").concat(option); }).join("\n");
    var answer = prompt("".concat(q, "\n").concat(optionsStr, "\nEscolha uma op\u00E7\u00E3o (digite o n\u00FAmero):"));
    return options[parseInt(answer || "", 10) - 1] || "";
}
// Quiz
function runQuiz() {
    var score = 0;
    for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
        var question = questions_1[_i];
        var userAnswer = askQuestion(question);
        if (userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
            console.log("Resposta correta!");
            score++;
        }
        else {
            console.log("Resposta incorreta. A resposta correta era: ".concat(question.correctAnswer));
        }
    }
    console.log("Fim do quiz! Sua pontua\u00E7\u00E3o final \u00E9: ".concat(score, "/").concat(questions.length));
}
runQuiz();
