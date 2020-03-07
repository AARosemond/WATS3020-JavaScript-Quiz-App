const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions;
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [{
    question: 'Does JavaScript require us to declare the Data Type of a variable?',
    answers: [{
            text: 'Nope',
            correct: true
        },
        {
            text: 'Yup',
            correct: false
        },
        {
            text: 'Declare, but snitches do get stiches',
            correct: false
        }
    ]
},
{
    question: 'What Data Type(s) are assigned to numeric values?',
    answers: [{
            text: 'Decimal',
            correct: false
        },
        {
            text: 'Borg',
            correct: false
        },
        {
            text: 'Number',
            correct: true
        }
    ]
},{
    question: 'What command allows you to break apart a String into an Array based on a chosen character?',
    answers: [{
            text: 'spicy_scowl()',
            correct: false
        },
        {
            text: 'split()',
            correct: true
        },
        {
            text: 'separate()',
            correct: false
        }
    ]
},{
    question: 'What are the values possible for a Boolean Data Type?',
    answers: [{
            text: 'false',
            correct: true
        },
        {
            text: 'xor',
            correct: false
        },
        {
            text: 'Flash! Ah-ah, Savior of the universe',
            correct: false
        }
    ]
},{
    question: 'The process of marking certain characters (such as apostrophes) so they work within Strings is:',
    answers: [{
            text: 'enhancing',
            correct: false
        },
        {
            text: 'escaping',
            correct: true
        },
        {
            text: 'encoding',
            correct: false
        }
    ]
},{
    question: 'What command is used to remove the first item in an Array?',
    answers: [{
            text: 'pop()',
            correct: false
        },
        {
            text: 'shift()',
            correct: true
        },
        {
            text: 'splice()',
            correct: false
        }
    ]
}]