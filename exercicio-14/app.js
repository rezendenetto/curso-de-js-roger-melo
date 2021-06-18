/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const h1 = document.querySelector('h1');

h1.innerText = h1.innerText.toUpperCase();

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];
const ul = document.querySelector('.numbers');

// função de callback
const insertNumberIntoUl = number => {
    ul.innerHTML += `<li class='number'>${number}</li>`;
};

numbers.forEach(insertNumberIntoUl); // desacoplar a função de callback do forEach

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

// Dica: quebrar o problema em varias etapas menores

const lis = document.querySelectorAll('.number');

// função de callback
const changeLiColor = li => {
    console.log(typeof li);

    const isEvenNumber = Number(li.innerText) % 2 === 0;
    const isOddNumber = Number(li.innerText) % 2 !== 0;

    if (isEvenNumber) {
        li.style.color = 'lightblue';
    }

    if (isOddNumber) {
        li.style.color = 'pink';
    }

    // outra forma de resolver, já que estamos dentro de função, usar o return

    // if (isEvenNumber) {
    //     li.style.color = 'lightblue';
    //     return;
    // }

    // li.style.color = 'pink';
};

lis.forEach(changeLiColor); // desacoplar a função de callback do forEach

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

// const body = document.querySelector('body');
const body = document.body;

body.classList.add('body-background');

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const link = document.querySelector('a');

link.setAttribute(
    'href',
    'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo'
);

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(link.getAttribute('href'));

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(h1.style);

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

body.classList.remove('body-background');

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

link.classList.toggle('link');
