/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
Ps2: o uso do Bootstrap (ou qualquer outra lib CSS) é opcional.
*/

//==> RESOLUÇÃO DO EXERCÍCIO 19 👇 <==

// const form = document.querySelector('.quiz-form');
// const finalResult = document.querySelector('.result');

// const correctAnswers = ['B', 'B', 'B', 'B'];

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     let score = 0;

//     //--> obtém as respostas do usuário <--
//     const userAnswers = [
//         form.inputQuestion1.value,
//         form.inputQuestion2.value,
//         form.inputQuestion3.value,
//         form.inputQuestion4.value,
//     ];

//     //--> calcula a pontuação do usuário <--
//     userAnswers.forEach((userAnswer, index) => {
//         if (userAnswer === correctAnswers[index]) {
//             score += 25;
//         }
//     });

//     //--> exibe a pontuação final <--
//     scrollTo(0, 0);

//     finalResult.classList.remove('d-none');

//     //--> anima a pontuação final <--
//     let counter = 0;

//     const timer = setInterval(() => {
//         if (counter === score) {
//             clearInterval(timer);
//         }

//         finalResult.querySelector('span').textContent = `${counter}%`;
//         counter++;
//     }, 10);
// });

// ---###---###---###---###---###---###---###---###---###---###---

//==> RESOLUÇÃO DO EXERCÍCIO 20 e 21 👇 <==

const form = document.querySelector('.quiz-form');
const finalScoreContainer = document.querySelector('.final-score-container'); // armazena uma div, daí container
//a classe final-score-container tem muito mais semântica do que a classe apenas result, como era no código HTML original

let score = 0; // saiu de dentro da função pra que possa ter escopo global agora

const correctAnswers = ['B', 'B', 'B', 'B'];

// EXERCÍCIO 21:
// REFATORAÇÃO DA FUNÇÃO COM MAP, e simplificação do código e returns
const getUserAnswers = () =>
    correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value);

// const getUserAnswers = () => {
//     const userAnswers = [];

//     correctAnswers.forEach((_, index) => {
//         // uso do underscore no lugar do correctAnswer que não estava sendo utilizado
//         const userAnswer = form[`inputQuestion${index + 1}`].value;
//         userAnswers.push(userAnswer);
//     });

//     //------------------

//     // const userAnswers = [
//     //     form.inputQuestion1.value,
//     //     form.inputQuestion2.value,
//     //     form.inputQuestion3.value,
//     //     form.inputQuestion4.value,
//     // ];

//     return userAnswers;
// };

// Essa função não deverá ser refatorada com uso do reduce, pois ela, a função está gerando um efeito colateral, que é a mudança de valor da let score, que foi declarada fora da função
const calculateUserScore = userAnswers => {
    // recebe um parâmetro
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index];
        if (isUserAnswerCorrect) {
            score += 25;
        }
    });
};

const showFinalScore = () => {
    // scrollTo(0, 0);

    // passar coordenadas como objeto pra que a rolagem seja mais suave com o behavior: 'smooth'
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });

    finalScoreContainer.classList.remove('d-none');
};

const animateFinalScore = () => {
    let counter = 0;

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer); // As linhas logo abaixo do bloco de código serão ainda executadas, a não ser que coloquemos um return dentro desse if
            // return // caso queiramos que o código logo abaixo não seja executado
        }

        finalScoreContainer.querySelector('span').textContent = `${counter}%`;
        counter++;
    }, 10);
};

const resetUserScore = () => {
    score = 0;
};

// A refatoração consiste em isolar o código em funções de responsabilidade única,observar se precisa receber algo como parâmetro / argumento e se as variáveis estão acessíveis no escopo global ou da função mesmo, depois invocar o bloco de código quando necessário
// Após a refatoração devo apagar os comentário que usamos pra nos auxiliar, deixando assim o código mais enxuto, já que agora o nome das const e funções já terão semântica suficiente pra que todos saibam o que cada um faz

form.addEventListener('submit', event => {
    event.preventDefault();

    // score = 0; // é necessário fazer essa atribuição de 0 a score, para que o valor volte a zero toda vez que o evento de submit for disparado, vamos fazer com a invocação de uma função que criamos pra zerar o valor da let score pra manter o padrão de escrita do código
    resetUserScore();

    // let score = 0; // passar a let score pro escopo global pra poder ser usada dentro da função calculateUserScore

    //--> obtém as respostas do usuário <--
    const userAnswers = getUserAnswers();

    //--> calcula a pontuação do usuário <--
    calculateUserScore(userAnswers); // na invocação é que recebe userAnswers como argumento, aqui mesmo escopo da userAnswers

    //--> exibe a pontuação final <--
    showFinalScore();

    //--> anima a pontuação final <--
    animateFinalScore();
});
