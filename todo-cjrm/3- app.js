const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input'); // .form-search input é o seletor CSS pra pegar o input

/* ---> INSERIR TO-DO <--- */
formAddTodo.addEventListener('submit', event => {
    event.preventDefault();

    console.log(event.target.add.value);
    // no começo devo testar logo se o escutador de eventos está funcionando, ou seja, se a função está sendo executada no momento do envio do form

    const inputValue = event.target.add.value.trim();

    if (inputValue.length) {
        // lembrar que 0 é um valor falsy
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
        `;
    }

    event.target.reset(); // é um método que restaura os valores default dos elemento de um form
    // event.target.add.value = '' // outra forma de fazer
});

/* ---> REMOVER TO-DO <--- */
// event delegation
todosContainer.addEventListener('click', () => {
    const clickedElement = event.target;

    console.log({ clickedElement });

    //1a forma de resolver:
    console.log(clickedElement.classList);
    console.log(
        'includes class "delete": ',
        Array.from(clickedElement.classList).includes('delete')
    );
    // DOMTokenList pra Array, com o uso do Array.from(), pra podermos usar o método includes

    if (Array.from(clickedElement.classList).includes('delete')) {
        console.log('1a forma: Clicou na lixeira');
        console.log(clickedElement.parentElement);

        clickedElement.parentElement.remove();
    }

    //2a forma de resolver:
    if (clickedElement.nodeName === 'I') {
        console.log('2a forma: Clicou na lixeira');
        console.log(clickedElement.parentElement);

        clickedElement.parentElement.remove();
    }
});

/* ---> BUSCAR TO-DO <--- */
inputSearchTodo.addEventListener('input', event => {
    event.preventDefault();

    console.log(event.target.value.trim()); // pra testar se a função do escutador de eventos está sendo executada
    console.log(todosContainer.children); // pra obter a referencia de todos os elementos filhos dessa todosContainer, ou seja, todos os to-dos, retorna um HTMLCollection

    const inputValue = event.target.value.trim().toLowerCase();

    // mesmo que a gente tenha encadeado o textContent na li e não no span, mas como o texto está dentro da li ele vai ser obtido pelo textContent
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue)) // uso do operador not !, pra obter as lis que não contém o valor inserido no input
        .forEach(todo => {
            todo.classList.remove('d-flex');
            todo.classList.add('hidden');
        });

    // se conter o valor do input, vamos remover a class hidden e adicionar a class d-flex
    Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden');
            todo.classList.add('d-flex');
        });
});
