/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

//---

// -> PASSO A PASSO simples pra quebrar o problema em partes menores e resolver:
//Criar um novo objeto de data, criar a função retornando o que o exercício pede de forma estática e depois ir substituindo por uma forma dinâmica, criar um console.log da invocação da função passando a data como argumento

// const present = new Date();
// const formatDate = date => {
//   return 'DD/MM/AAAA'
// }
// console.log(formatDate(present))

//---

const present = new Date();

//prettier-ignore
const formatTimeUnit = unit => `${String(unit).length === 1 ? `0${unit}` : unit}` // RE-APROVEITAMENTO DE CÓDIGO: exercícios 01, 02 e 07

const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //prettier-ignore
    // converter o day e o month pra string de forma explicita pra podermos utilizar a propriedade .length
    // return `${String(day).length === 1 ? `0${day}` : day}/${String(month).length === 1 ? `0${month}` : month}/${year}`;

    return `${formatTimeUnit(day)}/${formatTimeUnit(month)}/${year}`;
    // se quiser refatorar posso fazer a invocação da formatTimeUnit direto na date.getDate e date.getMonth
};

console.log(formatDate(present));

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const weekDays = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
];
const monthNames = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
];

const formatDateInfo = date => {
    const hours = formatTimeUnit(date.getHours()); // refatorado
    const minutes = formatTimeUnit(date.getMinutes()); // refatorado
    const weekDay = weekDays[date.getDay()]; // refatorado, ATENÇÃO: mover o array weekDays pra fora da função senão error de access 'weekDays' before initialization
    const monthDay = date.getDate();
    const month = monthNames[date.getMonth()]; // refatorado, ATENÇÃO: mover o array monthNames pra fora da função senão error de access 'monthNames' before initialization
    const year = date.getFullYear();

    //prettier-ignore
    // posso deixar cada item do array numa linha e mover o array pra fora da função
    // const weekDays = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];

    //prettier-ignore
    // posso deixar cada item do array numa linha e mover o array pra fora da função
    // const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    //prettier-ignore
    // pra deixar essa template string menor e mais legível, vou invocar a formatTimeUnit no retorno das invocações da date.getHours e da date.getMinutes e além disso vou fazer a invocação do date.getDay ser o index do item a ser buscado no array weekDays e fazer a invocação do date.getMonth ser o index do item a ser buscado no array monthNames
    // return `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)} - ${weekDays[weekDay]}, ${monthDay} de ${monthNames[month]} de ${year}`;
    return `${hours}:${minutes} - ${weekDay}, ${monthDay} de ${month} de ${year}`;
};

console.log(formatDateInfo(present));

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true };
const { id, isVerified } = user; // é como estivéssemos desempacotando valores de um objeto em variáveis, neste caso constantes

console.log(id, isVerified);

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' };
const robotB = { name: 'HAL 9000' };

// Foi preciso fazer essa transferência de nomes das propriedades dos objetos pra evitar que haja uma colisão de nomes entre as consts de mesmo nome
const { name: nameA } = robotA; // expressã pra que a const não tenha o mesmo nome da propriedade
const { name: nameB } = robotB; // expressã pra que a const não tenha o mesmo nome da propriedade

console.log(nameA, nameB);

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a';
const b = 'b';
const c = 'c';

// short-hand property name é um tipo de syntax pra evitar a redundância do código onde a propriedade e o valor dela é uma variável de mesmo nome

// const alphabetic = {a: a, b: b, c: c}
const alphabetic = { a, b, c };

console.log(alphabetic);

/*
  06

  - Refatore o código abaixo.
*/

//---

// const useDataSomewhereElse = value => {
//     console.log(value);
// };

// const updateSomething = (data = {}) => {
//     const target = data.target;
//     const property = data.property;
//     const willChange = data.willChange;

//     if (willChange === 'valor indesejado') {
//         willChange = 'valor desejado';
//     }

//     useDataSomewhereElse({
//         target: target,
//         property: property,
//         willChange: willChange,
//     });
// };

// updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' });

//---

const useDataSomewhereElse = value => {
    console.log(value);
};

const updateSomething = ({ target, property, willChange } = {}) => {
    if (willChange === 'valor indesejado') {
        willChange = 'valor desejado';
    }

    //prettier-ignore
    useDataSomewhereElse({ target, property, willChange});
};

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' });

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

//---

// const clockContainer = document.querySelector('.clock-container');

// const updateClock = () => {
//     const present = new Date();
//     const hours = present.getHours();
//     const minutes = present.getMinutes();
//     const seconds = present.getSeconds();

//     const clockHTML = `
//     <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
//     <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
//     <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
//   `;

//     clockContainer.innerHTML = clockHTML;
// };

// setInterval(updateClock, 1000);

//---

const clockContainer = document.querySelector('.clock-container');

// FUNÇÕES DE RESPONSABILIDADE ÚNICA SÃO O PODER rsrsrs
const getClockHTML = (hours, minutes, seconds) => `
<span>${hours}</span> :
<span>${minutes}</span> :
<span>${seconds}</span>
`;

const updateClock = () => {
    const present = new Date();
    const hours = formatTimeUnit(present.getHours()); // REFATORAÇÃO - a invocação da formatTimeUnit aqui e não mais <span>${formatTimeUnit(hours)}</span>
    const minutes = formatTimeUnit(present.getMinutes()); // REFATORAÇÃO - a invocação da formatTimeUnit aqui e não mais <span>${formatTimeUnit(minutes)}</span>
    const seconds = formatTimeUnit(present.getSeconds()); // REFATORAÇÃO - a invocação da formatTimeUnit aqui e não mais <span>${formatTimeUnit(seconds)}</span>

    clockContainer.innerHTML = getClockHTML(hours, minutes, seconds);
};

setInterval(updateClock, 1000);
