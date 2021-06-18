const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input');

const addTodo = inputValue => {
    if (inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}"> 
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
      </li>
        `;
    } // ATENÇÃO: observar que precisei colocar "" na interpolação data-todo="${inputValue}"
};

formAddTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value.trim();

    addTodo(inputValue); // refatoração, isolando o código em funções de responsabilidade única

    event.target.reset();
});

const todoRemove = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash;
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

    if (trashDataValue) {
        todo.remove();
    }
};

todosContainer.addEventListener('click', () => {
    const clickedElement = event.target;

    console.log(clickedElement.dataset); // ATENÇÃO: a propriedade dataset retorna o valor de todos os data alguma coisa que o elemento tiver, em DOMStringMap que é um objeto que contém uma propriedade com mesmo nome do termo que foi inserido depois do traço - do atributo data e essa propriedade armazena o valor do atributo, senão existir retorna um objeto vazio
    console.log(clickedElement.dataset.trash); // ATENÇÃO: acessando o valor da propriedade do objeto DOMStringMap, senão existir retorna undefined

    // if (clickedElement.dataset.trash) { // qualquer string é trusty e undefined é falsy

    //     console.log(document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`));

    //     document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`).remove() // o querySelector vai pegar a li que tem o mesmo valor no atributo data da lixeira que foi clicada e encadeamos o método remove() nessa referencia do elemento
    // }

    todoRemove(clickedElement); // refatoração, isolando o código em funções de responsabilidade única
});

const filterTodo = (todos, inputValue, returnMatchedTodos) => {
    // ATENÇÃO: retornar o array pra que ele não fique preso dentro do escopo da função
    return todos.filter(todo => {
        const matchedTodos = todo.textContent
            .toLowerCase()
            .includes(inputValue);

        return returnMatchedTodos ? matchedTodos : !matchedTodos;
    });
};

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        // o método forEach precisa ser encadeado em um array
        todo.classList.remove(classToRemove);
        todo.classList.add(classToAdd);
    });
};

const hideTodos = (todos, inputValue) => {
    // todos
    // .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))

    // filterTodo(todos, inputValue, false).forEach(todo => {
    //     todo.classList.remove('d-flex')
    //     todo.classList.add('hidden')
    // })

    const todosToHide = filterTodo(todos, inputValue, false);
    manipulateClasses(todosToHide, 'hidden', 'd-flex');
};

const showTodos = (todos, inputValue) => {
    // todos
    // .filter(todo => todo.textContent.toLowerCase().includes(inputValue))

    // filterTodo(todos, inputValue, true).forEach(todo => {
    //     todo.classList.remove('hidden')
    //     todo.classList.add('d-flex')
    // })

    const todosToShow = filterTodo(todos, inputValue, true);

    manipulateClasses(todosToShow, 'd-flex', 'hidden');
};

inputSearchTodo.addEventListener('input', event => {
    event.preventDefault();

    console.log(event.target.value.trim());
    console.log(todosContainer.children);

    const inputValue = event.target.value.trim().toLowerCase();

    // ReferenceError é quando uma variável que não existe em um determinado escopo foi usada, por isso precisamos passar como parâmetros pras funções de responsabilidade únicas que serão criadas na refatoração do código
    const todos = Array.from(todosContainer.children); // pra eliminar a repetição de criar dois novos arrays com o Array.from() como estava antes da refatoração, melhor usar a const todos que armazena um array único

    //1a opção de resolver
    // Array.from(todosContainer.children) // são array diferentes???, Array.from()
    // .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    // .forEach(todo => {
    //     todo.classList.remove('d-flex')
    //     todo.classList.add('hidden')
    // })

    // Array.from(todosContainer.children) // são array diferentes???, Array.from()
    // .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    // .forEach(todo => {
    //     todo.classList.remove('hidden')
    //     todo.classList.add('d-flex')
    // })

    //2a opção de resolver
    // prettier-ignore
    // Array.from(todosContainer.children)
    //     .forEach(todo => {
    //         if (!todo.textContent.toLowerCase().includes(inputValue)) {
    //             todo.classList.remove('d-flex');
    //             todo.classList.add('hidden');
    //         }

    //         if (todo.textContent.toLowerCase().includes(inputValue)) {
    //             todo.classList.remove('hidden')
    //             todo.classList.add('d-flex')
    //         }
    // });

    hideTodos(todos, inputValue); // refatoração, isolando o código em funções de responsabilidade única
    showTodos(todos, inputValue); // refatoração, isolando o código em funções de responsabilidade única
});
