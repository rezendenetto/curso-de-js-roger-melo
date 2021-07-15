/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

// ############################
// ########## CÓDIGO ##########
// ############################

// const form = document.querySelector('form');
// const GIFSContainer = document.querySelector('div');

// form.addEventListener('submit', async event => {
//     event.preventDefault();

//     const inputValue = event.target.search.value;
//     const APIKey = 'ikdAKMVfS5f4O9UoM5PeGXJrFtXFDzgS';
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${inputValue}`;

//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error('Não foi possível obter os dados da API');
//         }

//         const GIFData = await response.json();
//         const downsizedGIFUrl = GIFData.data[0].images.downsized.url;
//         const img = document.createElement('img');

//         img.setAttribute('src', downsizedGIFUrl);
//         img.setAttribute('alt', GIFData.data[0].title);

//         GIFSContainer.insertAdjacentElement('afterbegin', img);
//         console.log(img);

//         event.target.reset();
//     } catch (error) {
//         alert(`Erro: ${error.message}`);
//     }
// });

// #######################################
// ########## CÓDIGO REFATORADO ##########
// #######################################

// const form = document.querySelector('form');
// const GIFSContainer = document.querySelector('div');

// // ***indicado separar por uma linha, já que acima são const DOM e abaixo const normal

// // consts movidas ora fora da função
// const APIKey = 'ikdAKMVfS5f4O9UoM5PeGXJrFtXFDzgS';

// // ***indicado separar por uma linha, já que acima const e abaixo função

// //prettier-ignore
// // transformar a const url em função pra poder passar o inputValue que agora vai se chamar de GIFName
// // const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${inputValue}`;
// const getGIPHYApiUrl = (GIFName) =>
//   `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${GIFName}`;

// const generateGIFImg = (downsizedGIFUrl, GIFData) => {
//     const img = document.createElement('img');

//     img.setAttribute('src', downsizedGIFUrl);
//     img.setAttribute('alt', GIFData.data[0].title);

//     return img; // fazer retornar img pra poder usar fora da função
// };

// // o try catch vai ficar numa função isolada, porque os erros que preciso pega são os erros apenas da requisição
// const fetchGIF = async inputValue => {
//     try {
//         const GIPHYApiUrl = getGIPHYApiUrl(inputValue);
//         const response = await fetch(GIPHYApiUrl);

//         if (!response.ok) {
//             throw new Error('Não foi possível obter os dados da API'); // se cair aqui, nenhuma linha abaixo será executada, throw é semelhante ao return, mas não retorna nenhum valor
//         }
//         return response.json(); // colocar pra retornar
//     } catch (error) {
//         alert(`Erro: ${error.message}`); // retorna undefined, e undefined vai ser atribuído a const GIFData na invocação da fetchGIF(), pra evitar isso, precisamos utilizar um condicional if
//     }
// };

// const insertGIFIntoDOM = async inputValue => {
//     // isolar o código que está fazendo o request, try e catch, em uma função de responsabilidade única
//     // try {
//     //     const GIPHYApiUrl = getGIPHYApiUrl(inputValue);
//     //     const response = await fetch(GIPHYApiUrl);

//     //     if (!response.ok) {
//     //         throw new Error('Não foi possível obter os dados da API');
//     //     }

//     const GIFData = await fetchGIF(inputValue); // fazer receber a invocação da fetchGIF

//     if (GIFData) {
//         const downsizedGIFUrl = GIFData.data[0].images.downsized.url; // quando cai no catch, vai dar problema aqui, pois GIFData armazena undefined e não é possível ler a propriedade data de undefined

//         const img = generateGIFImg(downsizedGIFUrl, GIFData); // const img vai receber o retorno da função generateGIFImg

//         GIFSContainer.insertAdjacentElement('afterbegin', img);
//         console.log(img);

//         // event.target.reset();
//         // não vai mais funcionar com o event, substituir pela const form
//         form.reset();
//         // } catch (error) {
//         //     alert(`Erro: ${error.message}`);
//         // }
//     }
// };

// // não precisa mais ser uma função async
// form.addEventListener('submit', async event => {
//     event.preventDefault();

//     const inputValue = event.target.search.value;

//     // const GIPHYApiUrl = getGIPHYApiUrl(inputValue); // mover pra dentro da função insertGIFIntoDOM
//
//     insertGIFIntoDOM(inputValue);
// });

// #########################################################
// ########## CÓDIGO REFATORADO E SEM COMENTÁRIOS ##########
// #########################################################

const form = document.querySelector('form');
const GIFSContainer = document.querySelector('div');

const APIKey = 'ikdAKMVfS5f4O9UoM5PeGXJrFtXFDzgS';

//prettier-ignore
const getGIPHYApiUrl = GIFName => 
  `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${GIFName}`;

const generateGIFUrl = (downsizedGIFUrl, GIFData) => {
    const img = document.createElement('img');

    img.setAttribute('src', downsizedGIFUrl);
    img.setAttribute('alt', GIFData.data[0].title);

    return img;
};

const fetchGIF = async inputValue => {
    try {
        const GIPHYApiUrl = getGIPHYApiUrl(inputValue);
        const response = await fetch(GIPHYApiUrl);

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados da API');
        }

        return response.json();
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
};

const insertGIFIntoDOM = async inputValue => {
    const GIFData = await fetchGIF(inputValue);

    if (GIFData) {
        const downsizedGIFUrl = GIFData.data[0].images.downsized.url;
        const img = generateGIFUrl(downsizedGIFUrl, GIFData);

        GIFSContainer.insertAdjacentElement('afterbegin', img);

        form.reset();
    }
};

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.search.value;

    insertGIFIntoDOM(inputValue);
});
