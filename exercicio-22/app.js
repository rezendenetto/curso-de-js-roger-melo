/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ['Caio', 'André', 'Dário'];

// gerar uma cópia do array original com .map(item => item)
const namesCopy = names.map(item => item); // outra opção é gerar uma cópia do array original com .filter(item => true)

namesCopy.sort(); // se for encadear o sort logo após o map, trocar o nome da variável pra namesInAlphabeticalOrder

names[0] = 'Valor modificado'; // observar que apenas o array original será modificado com essa re-atribuição, o array cópia não sofrerá pois seus itens são tipo primitivo

console.log({ names, namesCopy }); // inserir um objeto que recebe as propriedades names e namesCopy

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
    { id: 03, name: 'Simba' },
    { id: 02, name: 'Nala' },
    { id: 01, name: 'Scar' },
    { id: 04, name: 'Mufasa' },
];

const charactersCopy = characters
    .map(item => item) // NESTE CASO É UMA CÓPIA FALSA, JÁ QUE OS ITENS SÃO OBJETO, QUE SÃO TIPO REFERENCIA, precisamos fazer o map retornar um novo objeto baseado nos itens do array original pra não ter problema futuros com re-atribuições
    .sort((item1, item2) => item1.id - item2.id);

// se quiser REFATORAR, fazer o destructuring e o short-hand propriedade e valor do objeto mesmo nome
const charactersOrderById = characters
    .map(item => ({ id: item.id, name: item.name })) // pra retornar uma objeto e não dar problema com a engine do JS, usar a notação ({objeto}) ou { return {} }
    .sort((item1, item2) => item1.id - item2.id); // é possível REFATORAR, destructuring, renomeando as variáveis id dentro da expressão de destructuring ({id: item1Id}, {id: item2Id}), mas escreveríamos muito código e não melhoraria tanto a legibilidade do código

characters[0].name = 'oieeeeeeeeeee'; // o valor dessa propriedade será re-atribuído no objeto original e acabará sendo refletido também na cópia feita pelo map, pois trata-se de uma cópia falsa, já que os itens do array original são tipo objeto, que é tipo referencia, sendo assim temos temos apenas dois ponteiros apontando pro mesmo objeto no heap

console.log({ characters, charactersOrderById });

/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291];

console.log(numbers);

const getArrayCopy = array => array.map(item => item); // UTILIZAR A FUNÇÃO sempre que a expressão array.map(item => item) se repetir

// REFATORANDO, trocar o nome da variável de numbersCopy pra orderedInAscendingOrder
const orderedInAscendingOrder = getArrayCopy(numbers).sort(
    (number1, number2) => {
        console.log(`Comparando n1: ${number1} e n2: ${number2}`);

        return number1 - number2;
    }
);

console.log(orderedInAscendingOrder);

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70];
const numberGreaterThan50 = randomNumbers.find(number => number > 50);
// debugger; // no navegador no debugger, passar o mouse encima da randomNumbers vai mostrar todos os itens, já se selecionar com o mouse toda a expressão, vai mostra 60, que é o que a expressão retorna

console.log(numberGreaterThan50);

/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno'];

// REFATORANDO, trocar nome da variável de peopleCopy pra peopleInReverseAlphabeticalOrder
const peopleInReverseAlphabeticalOrder = people
    .map(item => item)
    .sort()
    .reverse();

console.log({ people, peopleInReverseAlphabeticalOrder });

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo'];

const ingredientsCopy = ingredients
    .map(ingredient => `${ingredient} cozido`)
    .join(', ')
    .replace('cebola cozido', 'cebola cozida');

// ---

const cookedIngredients = ingredients.reduce(
    (acc, ingredient, index, array) => {
        // const ultimaLetra = ingredient[ingredient.length - 1];
        // console.log(ultimaLetra);

        // 2o Problema: duas formas diferentes de resolver o problema de gênero da ultima letra

        // const correctWordGender =
        //     ingredient[ingredient.length - 1] === 'a' ? 'cozida' : 'cozido';

        const correctWordGender = /a$/.test(ingredient) ? 'cozida' : 'cozido';
        const ingredientMessage = `${acc} ${ingredient} ${correctWordGender}`;

        const isLastItem = index === array.length - 1;

        // REFATORAÇÃO: substituir todo o if logo abaixo por um ternário
        // return isLastItem ? ingredientMessage : `${ingredientMessage},`

        if (isLastItem) {
            console.log('Ultimo item:', ingredient);

            return ingredientMessage; // 1o Problema: fazer um return diferente pra resolver o problema da virgula no ultimo item
        }

        console.log(acc); // o accumulator vai receber o retorno da função a cada iteração

        return `${ingredientMessage},`;
    },
    ''
);

console.log(cookedIngredients);

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilmovies = [
    {
        title: 'Vingadores: Ultimato',
        peopleAmount: 19686119,
        distributedBy: 'Disney',
    },
    {
        title: 'Titanic',
        peopleAmount: 17050000,
        distributedBy: 'Paramount / 20th Century',
    },
    { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
    {
        title: 'Vingadores: Guerra Infinita',
        peopleAmount: 14572181,
        distributedBy: 'Disney',
    },
    { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
    {
        title: 'Nada a Perder',
        peopleAmount: 11944985,
        distributedBy: 'Paris Filmes',
    },
    {
        title: 'Os Dez Mandamentos',
        peopleAmount: 11259536,
        distributedBy: 'Paris / Downtown Filmes',
    },
    {
        title: 'Tropa de Elite 2',
        peopleAmount: 11204815,
        distributedBy: 'Zazen',
    },
    { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
    {
        title: 'Dona Flor e Seus Dois Maridos',
        peopleAmount: 10735524,
        distributedBy: 'Embrafilme',
    },
];

const peopleAmount = topBrazilmovies
    .filter(({ distributedBy }) => distributedBy === 'Disney')
    .reduce((acc, { peopleAmount }) => {
        console.log(`O accumulator recebeu ${acc} + ${peopleAmount}`);

        return acc + peopleAmount;
    }, 0);

console.log(peopleAmount);

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
    { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
    { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
    { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
    { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
    { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
    { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' },
];

// REFATORANDO:
// - destructuring objeto
// - short-hand pra quando propriedade e valor no objeto tem o mesmo nome

const dogsInHumanAge = pets
    .filter(({ type }) => type === 'Dog')
    .map(({ name, age, gender, type }) => {
        // podemos retornar um objeto de duas formas, usando a forma simplificada: ({objeto}) ou a forma tradicional: { return {} }
        return {
            name,
            age: age * 7,
            gender,
            type,
        };
    });

console.log(dogsInHumanAge);

/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

const ul = document.querySelector('.list-group');

// 1a forma de fazer:

// topBrazilmovies.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item.title;
//     ul.insertAdjacentElement('beforeend', li);
// });

// 2a forma de fazer:

// const movieNames = topBrazilmovies.map(movie => `<li>${movie.title}</li>`).join('');
// ul.innerHTML = movieNames

// 3a forma de fazer:

const movieNames = topBrazilmovies.reduce((acc, { title }) => {
    acc += `<li>${title}</li>`; // o ideal é já retornar acc + `<li>${movie.title}</li>`
    return acc;
}, '');

ul.innerHTML = movieNames;

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/

// Resposta: basta atribuir zero a score dentro do submit logo na parte inicial do listener de evento de submit, mas pra manter o mesmo padrão de código, vamos fazer esse reset do valor da let score com a invocação de uma função que criaremos
