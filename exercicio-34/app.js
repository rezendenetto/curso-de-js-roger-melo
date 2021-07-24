/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

//prettier-ignore
// obs.: Não é porque a função recebe uma string como parâmetro que vou ter que permanecer trabalhando com uma string dentro da função
const getReversedString = string => string
  .split('')
  .reverse()
  .join('');

//prettier-ignore
const reverseString = string => string
    .split('')
    .reduce((acc, letter) => letter + acc, '');

console.log(getReversedString('123')); // 321
console.log(reverseString('abc')); // cba

/* 
1a iteração: a + '' => 'a'
2a iteração: 'b' + 'a' => 'ba'
3 iteração: 'c' + 'ba' => 'cba'
*/

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33];

// o que o código logo abaixo está fazendo?
// Resposta: só serve pra verificar se o 15 existe ou não no array

// let foundNumber = false;

// numbers.forEach(number => {
//     if (number === 15) {
//         foundNumber = true;
//     }
// });

// console.log(foundNumber);

// Código refatorado, usar uma abstração do código através do método de array .includes()
const foundNumber = numbers.includes(15);

console.log(foundNumber);

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/

// Resposta: arquivo weather.js e app.js
