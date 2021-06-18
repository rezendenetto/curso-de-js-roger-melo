/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos');
const lis = Array.from(ul.children); // converter de HTMLCollection pra array

const insertVideoClass = li => {
    li.classList.add('video');
};

lis.forEach(insertVideoClass);

console.log({ ul, lis }); // notação pra facilitar visualização no console.log

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('.h2-exercicio15');

console.log(h2.parentElement);

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector('.h1-exercicio15');

console.log(h1.nextElementSibling);

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling);

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const showClickedLi = event => {
    console.log(event.target); // No caso de funções desacopladas não posso passar o li/item como alvo, precisa ser o event.target
};

const addClickEvent = li => {
    li.addEventListener('click', showClickedLi);
};

lis.forEach(addClickEvent);

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
    {
        name: 'Como o promise all funciona | JavaScript',
        length: '00:01:52',
    },
    {
        name: 'Como refatorar um for loop | JavaScript',
        length: '00:04:18',
    },
    {
        name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
        length: '00:02:55',
    },
];

const button = document.querySelector('button');
console.log(button);

const insertVideoLi = ({ name, length }) => {
    // pra usar o destructuring, precisa colocar os parenteses
    ul.innerHTML += `<li>${name} | ${length}</li>`; // ATENÇÃO: senão fechar a tag </li> dá problema
};

const handleClickButton = () => {
    videos.forEach(insertVideoLi);
};

button.addEventListener('click', handleClickButton);

/* 2a forma pra resolução 
button.addEventListener('click', () => {
    videos.forEach(video => {
        const lis8 = document.createElement('li');
        lis8.textContent = video.name;
        ul.append(lis8);
    });
});
*/

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const body = document.body;

h1.addEventListener('click', () => {
    body.innerHTML = '';
});

/* 2a forma pra resolução
h1.addEventListener('click', () => {
    body.remove(); // neste caso será inclusive removida a própria tag body
});
*/
