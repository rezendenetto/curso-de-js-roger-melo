/*
  01

  - Ao descomentar o código abaixo, um erro será lançado;
  - Solucione esse problema sem declarar uma constante "book".
*/

console.log(book); // re-ordenar os scripts no arquivo index.html, já que a const book existem no arquivo index.js

/*
  02

  - Implemente uma função que, ao ser invocada, recebe um array com 3 itens;
  - A função deve retornar um novo array em que:
    - O 1º item é o 3º item do array recebido por argumento;
    - O 2º item é o 1º item do array recebido por argumento;
  - Implemente a função da forma mais concisa que você conseguir.
*/

const swap = ([first, , third]) => [third, first]; // como a swap recebe um array como parâmetro, posso já fazer o destructuring dentro dos parâmetros da própria função

console.log(swap([953, 299, 384]));

/*
  03

  - Em uma declaração, faça o destructuring apenas da propriedade 'name' do 
    objeto com o id 3.
*/

const topics = [
    { id: 1, name: 'Artes & cultura' },
    { id: 2, name: 'Negócios & finanças' },
    { id: 3, name: 'Carreiras' },
];

const [, , { name }] = topics; // não importa se um destructuring está dentro de outro destructuring
// debugger
console.log(name);

/*
  04

  - O 2º item do array abaixo contém as cores RGB;
  - Em uma declaração, faça o destructuring dos valores desse item em 3 consts: 
    'red', 'green' e 'blue'.
*/

const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF'];

const [, [red, green, blue]] = colors;
console.log(red, green, blue);

/*
  05

  - Descomente o código abaixo e implemente a função greet;
  - Observe que ela recebe 2 argumentos, um objeto e uma string;
  - Dentro da declaração da função:
    - Faça um destructuring no objeto recebido no 1º argumento;
    - No destructuring, nomeie de forma dinâmica a const que você está 
      declarando, usando o 2º argumento que a invocação da função recebeu.
      Você já conhece a sintaxe que nomeia de forma dinâmica;
    - Atribua "desconhecido" como valor default da const do destructuring;
    - Faça a função retornar "Olá, meu nome é [NOME]!".
*/

/* 
-> Quebrar em problemas menores
1o - descomentar apenas umas das invocações do exercício
2o - criar a função const greet = () => {}
3o - fazer a função retornar alguma coisa, const greet = () => `Olá, meu nome é [NOME]!`
4o - tentar resolver de forma mais específica o que o exercício pede

ATENÇÃO: será uma função dinâmica que irá trazer o valor que qualquer propriedade que passarmos no segundo argumento armazena, sem quebrar o código, ou seja, funciona pra todos os casos e não só pro caso de um objeto com uma propriedade específica name por exemplo, usar COMPUTER PROPERTIES NAME

objetivo final = nomear a const do destructuring usando a string que a função recebeu no segundo argumento

dica: 
- lembrar que parâmetros de função são variáveis
- destructuring quando sei quais os nomes das propriedades do objeto
const {prop1: newConst} = {prop1: 1, prop2: 2}

- destructuring quando NÃO sei o nome das propriedades do objeto, usar computer properties name
const {[dynamicName]: name} = obj
*/

// prettier-ignore
// A função neste caso vai ter que ter bloco, senão ReferenceError: Cannot access 'dynamicName' before initialization
const greet = (obj, dynamicName) => {
  const {[dynamicName]: name555 = 'desconhecido' } = obj 

  return `Olá, meu nome é ${name555}!` 
}

console.log(greet({ name: 'Roger' }, 'name')); // estou atribuindo pra name555 o valor da propriedade dynamicName, ou seja, name: 'Roger'
console.log(greet({}, 'personName')); // tentando atribuir pra name555 o valor de uma propriedade que não existe no obj, vou precisa usar default params pra não mostrar undefined

/*
  06

  - O idioma da interface gráfica da aplicação que estamos construindo 
    (Weather App) é pt-BR;
  - Ao invocarmos a getCityWeather, observe que a propriedade "WeatherText" do 
    objeto obtido armazena a descrição do clima em inglês: "cloudy", "rain", 
    etc;
  - Traduza os possíveis valores dessa propriedade;
  - Não é necessário implementar condicionais, objetos, ou arrays para fazer
    isso.
*/

/*
  07

  - Refatore o weather.js;
  - Uma dica do que pode ser melhorado:
    - A repetição dos requests pode ser eliminada por uma função genérica e 
      reutilizável, responsável apenas por fazer requests.
*/
