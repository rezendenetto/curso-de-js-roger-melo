/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

const getPokemon = (url, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200;
        const isRequestNotOk = request.readyState === 4;

        if (isRequestOk) {
            const data = JSON.parse(request.responseText);
            callback(null, data);
            return;
        }

        if (isRequestNotOk) {
            callback('Não foi possível obter o Pokémon', null);
        }
    });

    request.open('GET', url);
    request.send();
};

// const pokemons = ['bulbasaur', 'charmander', 'squirtle'];

// ISOLAR O CÓDIGO DO IF E RETURN EM UMA FUNÇÃO logPokemon, caso contrário se o primeiro request falhar NÃO seria executado os demais requests devido ao return dentro da função getPokemon, mas como agora o return está dentro da função logPokemon e não mais dentro da getPokemon os demais requests serão executados mesmo que o primeiro request falhe
/*
getPokemon('https://pokeapi.co/api/v2/pokemon/1', (error, data) => {
    if (error) {
        console.log(error);
        return; 
        // se esse return fica aqui dentro da getPokemon, o código abaixo e os demais requests não serão executados, caso entre nesse if
    }

    console.log(`Pokémon obtido: ${data.name}`);
});
*/

/*
const logPokemonData = (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(`Pokémon obtido: ${data.name}`);
};
*/

// Atenção:
//OS TERNÁRIOS SÃO EXPRESSÕES CONDICIONAIS que precisam por convenção retornam um valor, neste caso não teria problema algum pro nosso código colocar a expressão em uma linha e com return implícito das Arrow Functions, já que undefined seria retornado de qualquer forma pela função, mesmo que não tivesse um return
//prettier-ignore
const logPokemonData = (error, data) => error 
    ? console.log(error) 
    : console.log(`Pokémon obtido: ${data.name}`);

const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const bulbasaur = getPokemonUrl(1);
const charmander = getPokemonUrl(4);
const squirtle = getPokemonUrl(7);

// REQUESTS SEQUENCIAIS
//prettier-ignore
getPokemon(bulbasaur, (error, data) => {
  logPokemonData(error, data)
  getPokemon(charmander, (error, data) => {
    logPokemonData(error, data)
    getPokemon(squirtle, (error, data) => {
      logPokemonData(error, data)
    }) 
  })
});

// REQUESTS NÃO SEQUENCIAIS e sim em paralelo
// getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemons[0]}`, logPokemonData);
// getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemons[1]}`, logPokemonData);
// getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemons[2]}`, logPokemonData);

/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/

const map = (array, func) => {
    // 1a forma:
    // const newArray = [];

    // for (let i = 0; i < array.length; i++) {
    //     newArray.push(func(array[i]));
    // }

    // return newArray;

    // ---

    // 2a forma:
    const newArray = [];

    // Atenção:
    // Como o forEach sempre retorna undefined, tanto faz eu invocar o push dentro do bloco da função do forEach ou como retorno implícito da Arrow Function numa linha única
    // array.forEach(item => newArray.push(func(item)));

    // refatorado:
    const addNewItemToNewArray = item => {
        const newItem = func(item);
        newArray.push(newItem);
    };

    array.forEach(addNewItemToNewArray);

    return newArray;
};

console.log(map([1, 2, 3], number => number * 2)); // [2, 4, 6]
console.log(map([1, 2, 3], number => number * 3)); // [3, 6, 9]

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
    name: 'Roger',
    getName() {
        return this.name;
    },
    getName2: () => person.name, // sempre que possível NÃO usar o this
};

console.log('Exercício 03: ', person.getName2());

/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x';
// const x = 'y';

// 1a forma, não recomendado bloco solto e sem nome
// {
//     const x = 'y';
// }

// 2a forma, mais recomendada
const getX = () => {
    const x = 'y';

    return x;
};

console.log(x, getX());

/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/

// const getFullName = ({ firstName, lastName }) => {
//     // const firstName = user.firstName;
//     // const lastName = user.lastName;

//     return `${firstName} ${lastName}`;
// };

// refatorando pra uma linha
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }));

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

const convertToHex = color => {
    const colors = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
        black: '#000000',
        pink: '#FF0084',
    };

    // return colors.color // obs.: colors.color, color neste caso não é o mesmo color do parâmetro

    return colors[color]
        ? `'O hexadecimal para a cor ${color} é ${colors[color]}`
        : `Não temos o equivalente hexadecimal para ${color}`;
};

const colors = ['red', 'green', 'blue', 'black', 'pink', 'yellow', 'gray'];

// deixar juntos, a const e o forEach, pois estão relacionados
const logColorMessage = color => console.log(convertToHex(color));
colors.forEach(logColorMessage);

/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
    { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' },
];

/*
- map e filter: caso o objetivo seja gerar um novo array
- reduce: caso o objetivo seja percorrer um array e gerar um novo valor a partir desse array, inclusive objeto, ex.: Computed Property Names
- forEach e for: pra iterar e executar um efeito colateral, pra usar o forEach precisa-se já de um array senão usar o for

efeito colateral: é qualquer mudança de estado em uma aplicação que pode ser percebida do lado de fora da função que eu declarar e que não é um valore retornado pela função
*/

// const agesFrequency = people.reduce((acc, person) => {
//     acc[person.name] = 1; // acc na primeira iteração é um objeto vazio
//     // Computed Property Names, expressão que vai ser computada como nome da propriedade em um objeto
//     // caso não existir a propriedade será criada e quando já existir a propriedade sofrerá reatribuição

//     return acc;
// }, {});

const createOrIncrementAgeFrequency = (acc, { age }) => {
    acc[age] = acc[age] + 1 || 1;

    return acc;
};

// referenciar a função reducer como primeiro argumento do reduce
const agesFrequency = people.reduce(createOrIncrementAgeFrequency, {});
console.log(agesFrequency); // NÃO é uma função, é uma variável que armazena o valor resultante de uma expressão
