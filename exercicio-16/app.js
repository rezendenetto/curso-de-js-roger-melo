/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

/* REFATORAR O CÓDIGO ORGANIZANDO EM TRES BLOCOS:
- 1o A declaração das const, que armazenam as referencias dos elementos do DOM
- 2o A declaração das funções dos listeners de eventos, funções de callback 
- 3o A adição dos listeners de eventos nos elementos do DOM
*/

const div = document.querySelector('div');
const elementsInsideDiv = Array.from(div.children);
const h2 = document.querySelector('body > h2:nth-child(11)'); // tem mais de um h2 no código HTML
const egg = document.querySelector('.egg');
const button = document.querySelectorAll('button'); // tem mais de um button no código HTML

// elementsInsideDiv.forEach(element => {
//     element.addEventListener('click', event => {
//         // event é um objeto
//         h2.textContent = `Clicou no ${event.target.tagName.toLowerCase()}, filho da div.`;

//         event.stopPropagation(); // event é um objeto
//     });
// });

const showClickedElement = ({ target }) => {
    // fazer o destructuring do objeto event, mas não é indicado fazer o destructuring em propriedades aninhadas por conta da legibilidade do código, e do fato de ({target: {tagName}}), no caso a target não está disponível pra ser usada, ela foi apenas usada pra alcançar o nível da propriedade tagName do objeto

    const clickedElementName = target.tagName.toLowerCase();

    if (clickedElementName === 'div') {
        h2.textContent = 'Clicou na div.';
        return; // return da função, pra encerrar o código
    }
    // código logo abaixo, acaba funcionando como se fosse um else, já que demos o return dentro do if
    h2.textContent = `Clicou no ${clickedElementName}, filho da div.`;
};

const logCopyMessage = () => {
    console.log('Texto copiado!');
};

const showCoordinates = ({ offsetX, offsetY }) => {
    egg.textContent = `Eixo X: ${offsetX} | Eixo Y: ${offsetY}`;
};

const changeEggColor = () => {
    egg.style.backgroundColor = 'lightgoldenrodyellow';
};

div.addEventListener('click', showClickedElement);
h2.addEventListener('copy', logCopyMessage);
egg.addEventListener('mousemove', showCoordinates);
button[1].addEventListener('click', changeEggColor);

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
    { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
    { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
    { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
    { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
    { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
    { id: 6, name: "Gustavo D'Aqui", profession: 'Gerente de Marketing' },
    { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
    { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
    { id: 9, name: 'Hamilton Silva', profession: 'Advogado' },
];

const isSomePersonFrontEndDeveloper = people.some(({ profession }) => {
    // Atenção esse método .some() precisa ter obrigatoriamente um return ou uma linha sem { } que é return implícito da arrow function
    return profession === 'Front-end developer';
});

if (isSomePersonFrontEndDeveloper) {
    console.log('O array people contém, no mínimo, um(a) Front-end developer.');
}
