/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

//1a forma:
window.setTimeout(() => {
    console.log('Um segundo e meio se passaram');
}, 1500);

//2a forma: mensagem como terceiro argumento
setTimeout(
    message => {
        console.log(message);
    },
    1500,
    'Um segundo e meio se passaram'
);

//3a forma: desacoplando a função de callback
const message = 'Um segundo e meio se passaram';

const logMessage = message => {
    console.log(message);
};

setTimeout(logMessage, 1500, message);

//4a forma: passando console.log como função de callback
setTimeout(console.log, 1500, message, 'oieeeeee');

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const counterContainer = document.querySelector('.counter-container');
const buttonInitCounter = document.querySelector('.button-init-counter');
const buttonStopCounter = document.querySelector('.button-stop-counter');

// let counter = 0;
let timer = 0;

const incrementCounter = () => {
    // counter++; //1a forma: incrementar nesta linha com um pós-incremento e fazer a atribuição na linha debaixo
    // counterContainer.textContent = counter;
    //---
    // counterContainer.textContent = ++counter; //2a forma: fazer um pre-incremento com a atribuição, pois já retorna o valor incrementado
    //---
    const incrementedCounter = Number(counterContainer.textContent) + 1;
    counterContainer.textContent = incrementedCounter; //3a forma: O conteúdo HTML da página é carregada com a string '0'
};

const stopCounter = () => {
    clearInterval(timer);
    // counter = 0;
    counterContainer.textContent = 0;
};

buttonInitCounter.addEventListener('click', () => {
    timer = setInterval(incrementCounter, 1000);
});

buttonStopCounter.addEventListener('click', stopCounter);

/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
