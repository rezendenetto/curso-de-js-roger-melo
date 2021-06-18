/*
  01

  - No envio do form, faça com que a página não seja recarregada.
*/

const form = document.querySelector('form');

const clearInput = () => {
    input.value = '';
    input.focus();
};

const logMessage = message => {
    console.log(message);
    clearInput();
};

const handleSubmit = event => {
    event.preventDefault(); // exercício 01

    const input = event.target.input; // no caso input é o id da tag input
    console.log('exercício 02: ', input);

    const inputUsernameRegex = /.{7,}/; // exercício 06
    const isAValidValueInput = inputUsernameRegex.test(form.input.value);

    if (isAValidValueInput) {
        console.log('exercício 06: O valor inserido no input é válido =)');
    } else {
        console.log('exercício 06: Valor inválido =(');
    }

    const inputUsernameRegex2 = /^[a-zA-Z0-9]{7,11}$/; // exercício 07, atenção para o uso do ^ $, caso contrario pode dar match no meio do conjunto de caracteres mesmo que nem todos os caracteres atendam ao padrão
    const isAValidValueInput2 = inputUsernameRegex2.test(form.input.value);

    if (isAValidValueInput2) {
        logMessage('exercício 07: O valor inserido no input é válido =)');
        return;
    }

    logMessage('exercício 07: Valor inválido =(');
};

form.addEventListener('submit', handleSubmit);

/*
  02

  - No envio do form obtenha, através do objeto event, o texto inserido no  
    input e exiba-o no console.
*/

/*
  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/

const p = document.querySelector('p');
const regex = /documentation/;
const result = regex.test(p.textContent);

console.log('Exercício 3: ', result);

/*
  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/

const B99message =
    'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta';
const B99Regex = /[A-Z0-9]{3}/;
const B99Result = B99Regex.test(B99message);

console.log('Exercício 4: ', B99Result);

/*
  05

  - Modifique (manualmente) o valor que a const word armazena para que o  
    resultado do teste entre a regex e a string exibido no console seja true.
*/

const word = 'NASA';
// const word = 'O que a NASA fotografou no dia do seu aniversário?';
const NASARegex = /^[A-Z]{4}$/;
const NASAResult = NASARegex.test(word);

console.log('Exercício 5: ', NASAResult);

/*
  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7  
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.
  
  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/

/*
  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.

  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/
