type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
};

// Perguntas
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
    }
];

// apresenta uma pergunta e receber a resposta
function askQuestion(question: Question): string {
    const { question: q, options } = question;
    const optionsStr = options.map((option, index) => `${index + 1}. ${option}`).join("\n");
    const answer = prompt(`${q}\n${optionsStr}\nEscolha uma opção (digite o número):`);

    return options[parseInt(answer || "", 10) - 1] || "";
}

// Quiz
function runQuiz() {
    let score = 0;

    for (const question of questions) {
        const userAnswer = askQuestion(question);
        if (userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
            console.log("Resposta correta!");
            score++;
        } else {
            console.log(`Resposta incorreta. A resposta correta era: ${question.correctAnswer}`);
        }
    }

    console.log(`Fim do quiz! Sua pontuação final é: ${score}/${questions.length}`);
}

runQuiz();
