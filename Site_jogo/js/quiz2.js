const $starGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answerContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$starGameButton.addEventListener("click", starGame)
$nextQuestionButton.addEventListener("click",displayNextQuestion)


let correntQuestionIndex = 0 
let totalCorrect = 0


function starGame(){
    $starGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()

}

function displayNextQuestion(){
    resetState()

    if(questions.length == correntQuestionIndex){
        return finishGame()
    }

    $questionText.textContent = questions[correntQuestionIndex].question 
    questions[correntQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.Text
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        $answerContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)

    })
}

function resetState(){
    while($answerContainer.firstChild){
        $answerContainer.removeChild($answerContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event){
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
    }else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct")

        }
        else {
            button.classList.add("incorrect")

        }
        button.disabled = true

    })
    $nextQuestionButton.classList.remove("hide")
    correntQuestionIndex++
}


function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)
    
    let message = ""
  
    switch (true) {
      case (performance >= 90):
        message = "Excelente :)"
        break
      case (performance >= 70):
        message = "Muito bom :)"
        break
      case (performance >= 50):
        message = "Bom"
        break
      default:
        message = "Pode melhorar :("
    }
  
    $questionsContainer.innerHTML = 
    `
            <p class="final-message">
                FIM DE JOGO!
                <br>
                Você acertou ${totalCorrect} de ${totalQuestions} questões.
                <br>
                <span>Resultado: ${message}</span>
            </p>
            <button 
                onclick=window.location.reload() 
                class="button1">
                    Refazer teste
            </button>
    `
  }

const questions = [
    {
        question: "1 - CSS é uma linguagem para especificar como documentos são apresentados aos usuários na web.",
        answers: [
            { Text: "<Verdadeiro>", correct: true },
            { Text: "<Falso>", correct: false }
            
        ]
    },
    {
        question: "2 - Bootstrap é um framework back-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.",
        answers: [
            { Text: "<Verdadeiro>", correct: false },
            { Text: "<Falso>", correct: true }
            
        ]
    },
    {
        question: "3 - HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo.",
        answers: [
            { Text: "<Verdadeiro>", correct: true },
            { Text: "<Falso>", correct: false }
            
        ]
    },
    {
        question: "4 - JavaScript é uma linguagem de programação de alto nível que manipula comportamentos de páginas web, como elementos dinâmicos, animações e infográficos. ",
        answers: [
            { Text: "<Verdadeiro>", correct: true },
            { Text: "<Falso>", correct: false }
            
        ]
    },
    {
        question: "5 - Com um framework é possível construir sites, aplicativos e softwares a partir de um esqueleto pré-definido, alterando apenas demais particularidades. Os frameworks podem ser apenas para desenvolvimento front-end, não back-end.",
        answers: [
            { Text: "<Verdadeiro>", correct: false },
            { Text: "<Falso>", correct: true }
            
        ]
    },
    {
        question: "6 - São as linguagens de programação: Python, C#, C, C++, DOS, JavaScript, IOS.",
        answers: [
            { Text: "<Verdadeiro>", correct: false },
            { Text: "<Falso>", correct: true }
            
        ]
    },
    {
        question: "7 - Full Stack developer é quem trabalha com Front End e Back End.",
        answers: [
            { Text: "<Verdadeiro>", correct: true },
            { Text: "<Falso>", correct: false }
            
        ]
    },
    {
        question: "8 - WWW é a sigla para rede mundial de computadores.",
        answers: [
            { Text: "<Verdadeiro>", correct: true },
            { Text: "<Falso>", correct: false }
            
        ]
    },
    {
        question: "9 - O HTTPS é um dos protocolos de internet mais usados por todos que navegam em sites e também acessam alguns apps e cuja sigla ou acrônimo significa Hyper Text Transfer Protocol Secure.",
        answers: [
            { Text: "<Verdadeiro>", correct: true },
            { Text: "<Falso>", correct: false }
            
        ]
    },
    {
        question: "10 - IP é um protocolo de segurança que permite a confirmação da identidade de um servidor, verificando o nível de confiança..",
        answers: [
            { Text: "<Verdadeiro>", correct: false },
            { Text: "<Falso>", correct: true }
            
        ]
    },

]