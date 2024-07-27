let currentQuestionIndex = 0;

function showQuestion(index) {
    const questions =
        document.querySelectorAll('.flex.flex-col');
    questions.forEach((question, i) => {
        question.style.display = i === index ? 'flex' : 'none';
    });
}

function nextQuestion() {
    currentQuestionIndex =

        Math.min(currentQuestionIndex + 1, 9);
    showQuestion(currentQuestionIndex);
}

function prevQuestion() {
    currentQuestionIndex =

        Math.max(currentQuestionIndex - 1, 0);
    showQuestion(currentQuestionIndex);
}

function getSelectedOption(questionId) {
    const selectedOption =

        document.querySelector(`input[name=${questionId}]:checked`);
    return selectedOption ? selectedOption.value : null;
}

function submitQuiz() {
    
    const answers = {
        q1: getSelectedOption('q1'),
        q2: getSelectedOption('q2'),
        q3: getSelectedOption('q3'),
        q4: getSelectedOption('q4'),
        q5: getSelectedOption('q5'),      
    };

    
    let score = 0;

    if (answers.q1 === 'a') {
        score += 10;
    }
    if (answers.q2 === 'a') {
        score += 10;
    }
    if (answers.q3 === 'a') {
        score += 10;
    }
    if (answers.q4 === 'b') {
        score += 10;
    }
    if (answers.q5 === 'd') {
        score += 10;
    }
   

    
    const resultSection = document.getElementById('result');
    resultSection.classList.remove('hidden');

    const scoreElement = document.getElementById('score');
    scoreElement.textContent =
        `Score: ${score}/50`; 

    const feedbackElement =
        document.getElementById('feedback');
   
    if (score >= 70) {
        feedbackElement.textContent =
            'Congratulations! You did great!';
    } else {
        feedbackElement.textContent =
            'You can do better. Keep practicing.';
    }
}


document.getElementById('result').classList.add('hidden');


showQuestion(currentQuestionIndex);

function restartQuiz() {
    
    currentQuestionIndex = 0;
   
    document.getElementById('result').classList.add('hidden');

    
    const radioButtons =
        document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => button.checked = false);

    showQuestion(currentQuestionIndex);
}