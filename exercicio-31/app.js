/*
  01

  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do 
    seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário 
    do GitHub.
*/

// const fetchGitHubUser = username => {
//     fetch(`https://api.github.com/users/${username}`);
// };

// fetchGitHubUser('rezendenetto'); // na aba network vejo que foi feito um request e se clicar na aba preview vejo meus dados de usuário do github

// -----------------------------------------------------------------------------

// Agora pra realmente obter e manipular esses dados, preciso escolher se vou usar o encadeamento de promises ou async await

// converter essa função em uma função async, e ao invés de encadear métodos .then() na invocação do fetch, vou antes da invocação do fetch inserir uma const response que receber a invocação do fetch, e pra const response armazenar o valor da promise resolvida que a invocação da fetch vai retornar, que é o objeto response, antes da invocação do fetch inserir a palavra reservada await, que vai pausar a execução do restante desta função até a promise da invocação do fetch seja resolvida ou rejeitada, quando a promise for resolvida ou rejeitada, toda essa expressão vai resultar no valor da promise resolvida ou rejeitada e a const response vai armazenar esse valor
const fetchGitHubUser = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    console.log(response); // vejo no console o valor da promise resolvida do fetch, que é o objeto response, e pra obter de fato os dados da resposta do request, preciso encadear no response a invocação do método .json()

    // console.log(response.json()); // vai pegar a resposta que o response está armazenando, que é um objeto JSON e vai parsear essa resposta pra um objeto Javascript e vai retornar uma promise que contém essa resposta parseada

    // console.log(await response.json()); // o await vai desencapsular o valor dessa promise resolvida, e essa expressão vai resultar no valor da promise resolvida

    return response.json(); // como tanto faz deixar ou remover o await daqui, pois de qualquer forma toda função async, vai retornar uma promise que encapsula o valor que estou retornando, vou remover o await pra deixar a expressão visualmente menos carregada
};

// essa segunda função vai exibir no console os dados que a fetchGitHubUser retorna, lembrar de transformar esta função em uma função async pra possamos usar a palavra reserva await pra desencapsular o valor da promise
// const logGitHubUser = async username => {
//     const userData = fetchGitHubUser(username); // como não colocamos o await, a userData vai armazenar a promise e não o objeto que ela contém
//     console.log(userData); //ao invés de ver o objeto com os meus dados de usuário do gitHub, eu vejo uma promise que contem esse objeto

//     console.log(await fetchGitHubUser(username)); // usar o await pra desencapsular o valor de uma promise
// };

// forma mais concisa de escrever o código acima
// não tem problema a função retornar undefined, até porque deixar ela com o bloco {} e não fazer ela retornar nada, retorna undefined também
const logGitHubUser = async username =>
    console.log(await fetchGitHubUser(username));

logGitHubUser('rezendenetto');

/*
  02

  - A partir do array numbers (abaixo), crie um novo array que contém somente 
    os números do array numbers que são divisíveis por 2 ou 3;
  - Exiba esse novo array no console.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//prettier-ignore
const divisibleBy2Or3 = numbers
    .filter(number => number % 2 === 0 || number % 3 === 0);

console.log(divisibleBy2Or3);
// -----------------------------------------------------------------------------

//prettier-ignore
const getDivisibleBy2Or3 = numbers => numbers
    .filter(number => number % 2 === 0 || number % 3 === 0);

console.log(getDivisibleBy2Or3([100, 150, 300]));

/*
  03

  - Declare um array no qual cada item desse array seja uma sílaba do seu nome.
  - A partir desse array, gere o seu nome usando a "língua do 'P'";
  - A língua do "P" é uma brincadeira onde você coloca a letra "P" antes de 
    cada sílaba de uma palavra falada, como se você estivesse falando em 
    código;
  - Exemplos de nomes na "língua do 'P'":
    - Roger => "PRoPger";
    - Natália => "PNaPtáPlia";
    - Rafaela => "PRaPfaPePla".
*/

const myName = ['Re', 'zen', 'de'];

const name1 = ['Ro', 'ger'];
const name2 = ['Na', 'tá', 'lia'];
const name3 = ['Ra', 'fa', 'ela'];

//prettier-ignore
// const nameInPLanguage = myName
//     .reduce((acc, syllable) => `${acc}P${syllable}`, '');

// Refatorando:
// 1a opção:
// const getNameInPLanguage = (acc, syllable) => `${acc}P${syllable}`
// const nameInPLanguage = myName.reduce(getNameInPLanguage, ''); // nomear o que o reducer está fazendo
// console.log(nameInPLanguage());

// 2a opção:
const getNameInPLanguage = name => name.reduce((acc, syllable) => `${acc}P${syllable}`, ''); // refatorando, fazer a const nameInPLanguage receber um função que tem o parâmetro name e fazer essa função retornar o resultado da expressão do reduce

console.log(getNameInPLanguage(myName));
console.log(getNameInPLanguage(name1));
console.log(getNameInPLanguage(name2));
console.log(getNameInPLanguage(name3));

/*
  04

  - Declare uma constante que receba seu primeiro nome;
  - Exiba no console todas as letras do seu nome separadas, com a seguinte
    mensagem: '"LETRA" é a POSIÇÃOª letra do meu nome.';
  - Por exemplo, se o nome é "Roger", as mensagens exibidas no console devem 
    ser:
      - "R" é a 1ª letra do meu nome;
      - "o" é a 2ª letra do meu nome;
      - E assim por diante, até a última letra.

  Dica: pesquise pelo método split.
*/

const name = 'Rezende';

const splittedName = name.split('');
// encadear o .split() em uma string, ele insere essa string em um array e retorna o array, lembrar que o split pode receber um separador como argumento, o separador pode ser uma string ou uma regex, o separador não vai ser incluído no array que o split está criando
// ex.: 'Roger'.split('g) // ['Ro', 'er']
// obs.: caso usemos uma string vazia como separador '', o split vai separar todos os caracteres

// Pra percorrer um array apenas pra executar pra cada item um efeito colateral, que no caso é exibir o item no console, podemos usar o forEach
// splittedName.forEach((letter, index) =>
//     console.log(`"${letter}" é a ${index + 1}ª letra do meu nome.'`)
// );

// Refatorando:
//prettier-ignore
const logSplittedName = name => name
    .split('')
    .forEach((letter, index) => 
        console.log(`"${letter}" é a ${index + 1}ª letra do meu nome.'`))

logSplittedName(name);

/*
  05

  - Crie um objeto com as seguintes propriedades e tipos de valores:
    - name: String
    - lastname: String
    - age: Number
  - Exiba no console, em um array, todas as propriedades do objeto acima;
  - Não use nenhuma estrutura de repetição, nem crie o array manualmente.

  Dica: pesquise pelo método Object.keys().
*/

const person = {
    name: 'Raimundo',
    lastName: 'Rezende',
    age: 36,
};

console.log(Object.keys(person)); // método keys do construtor Object

/*
  06

  - Implemente uma função que retorna as ocorrências de um determinado valor em 
    um array;
  - A função deve receber um array como 1º argumento e o valor a ser buscado no 
    array como 2º argumento;
  - Exemplo: se na invocação da função o array [1, 2, 3, 1] é passado como 1º 
    argumento e o número 1 é passado como 2º argumento, a função deve retornar 
    2, pois há duas ocorrências do número 1 no array;
  - Utilize o array abaixo para testar a função.
*/

const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60];

//prettier-ignore
const getOccurrences = (array, value) => 
    array.reduce((acc, item) => value === item ? acc + 1 : acc, 0) // sempre tem que retornar algo, se for preciso retornar só acc

console.log(getOccurrences(scores, 100)); // 3
console.log(getOccurrences(scores, 24)); // 0

/*
  07

  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método  
    filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];
    - filter([0, 1, 2], item => item) // [1, 2];
    - filter([1, 2, 3], item => item < 2) // [1];
    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
    - filter([1, 2, 3, 2, 1, 5], (item, index, array) =>
        index === array.indexOf(item)) // [1, 2, 3, 5];
  - Utilize os casos acima para testar sua função;
  - Se você não se lembra como o método filter funciona, há 2 opções:
    1) Reassistir à aula "O método filter" - Aula 01-03 da etapa 08;
    2) Pesquisar no MDN.
  
  Dica: lembre-se que o método filter inclui o item em questão no novo array 
  que está sendo gerado **apenas** se a função retorna um valor truthy.
*/

const filter = (array, func) => {
    const newArray = [];

    array.forEach((item, index, array) => {
        const itemShouldBeadded = func(item, index, array);

        if (itemShouldBeadded) {
            newArray.push(item);
        }
    });

    // Refatorando, achei neste caso a forma não refatorada melhor:

    // const filterItem = (item, index, array) => {
    //     const itemShouldBeadded = func(item, index, array);

    //     if (itemShouldBeadded) {
    //         newArray.push(item);
    //     }
    // };

    // array.forEach(filterItem);

    return newArray; // não é o forEach que está retornando e sim a função filter que retorna algo
};

console.log(filter([1, 2, 3], item => item)); // [1, 2, 3];
console.log(filter([0, 1, 2], item => item)); // [1, 2];
console.log(filter([1, 2, 3], item => item < 2)); // [1];
console.log(filter([1, 2, 3, 5], (item, index) => item === index + 1)); // [1, 2, 3];
//prettier-ignore
// DICA: utilizado pra criar um novo array apenas com os valores únicos, primeira ocorrência
console.log(filter([1, 2, 3, 2, 1, 5],(item, index, array) => 
index === array.indexOf(item))); // [1, 2, 3, 5];
