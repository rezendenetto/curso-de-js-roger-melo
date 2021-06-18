/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/

const myString = '    JS      ';
const trimmedString = myString.trim();

console.log({ myString, trimmedString });

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
    { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
    { firstName: 'José', lastName: 'Antônio', score: 100 },
    { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
    { firstName: 'Eric', lastName: 'Silva', score: 82 },
];

// É importante fazer o map gerar um novo objeto, pra que os objetos de cada array ocupem um espaço diferente na memória, pois se fizermos o map retornar apenas o item, como neste caso estamos lidando com objetos e objetos são do tipo referencia, o map não vai conseguir retornar uma cópia de cada objeto, ele vai retornar é o próprio objeto

const peopleOrderedByScore = people
    .map(({ firstName, lastName, score }) => ({ firstName, lastName, score }))
    .sort((item1, item2) => item1.score - item2.score);

console.log({ people, peopleOrderedByScore });

/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema'];

const threeLetterAnimals = animals.filter(({ length }) => length === 3);
// debugger

console.log(threeLetterAnimals);

/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

const animalsNamesLength = animals.map(({ length }) => length);
// debugger

console.log(animalsNamesLength);

/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
    { id: 1, name: 'João', nearMe: true },
    { id: 2, name: 'Matheus', nearMe: true },
    { id: 3, name: 'Luana', nearMe: false },
    { id: 4, name: 'Nilson', nearMe: true },
    { id: 5, name: 'Solange', nearMe: false },
];

// ATENÇÃO: Aqui diferente do exercício 02, que usamos o método sort() que modifica o array original, foi preciso retornar um novo objeto
const namesOfFriendsNearMe = friends
    .filter(({ nearMe }) => nearMe)
    .map(({ name }) => name);
// debugger

console.log(namesOfFriendsNearMe);

/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81];

const OddNumbersSum = numbers
    .filter(number => number % 2) // lembrar que 0 é um valor falsy, ou seja, quando o resto for zero o item não ser adicionado no novo array gerado pelo filter
    .reduce((acc, oddNumber) => acc + oddNumber, 0); // na primeira execução da função vai retornar o resultado de zero somado ao primeiro item do array, como a função será executada para o próximo item do array o resultado da primeira iteração será recebido no parâmetro accumulator, e esse ciclo vai continuar até que a função tenha sido executada pra todos os itens do array

// debugger

console.log(OddNumbersSum);

/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [
    {
        country: 'China',
        population: 1409517397,
    },
    {
        country: 'India',
        population: 1339180127,
    },
    {
        country: 'USA',
        population: 324459463,
    },
    {
        country: 'Indonesia',
        population: 263991379,
    },
];

const populationSum = data
    .filter(({ country }) => {
        return country !== 'China';
    })
    .reduce((acc, { population }) => acc + population, 0);
// debugger

console.log(populationSum);
