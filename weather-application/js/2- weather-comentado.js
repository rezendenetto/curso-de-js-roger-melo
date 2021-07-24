/* 
- ler a documentação da API
- fazer um request pra "Locations API" -> Text Search -> endpoint: City Search
- pegar o código da cidade no array que é retornado, locationKey
- fazer um request pra "Current Conditions API" -> Current Conditions -> endpoint: Current Conditions, passando o locationKey

url base: http://dataservice.accuweather.com/locations/v1/cities/search

Query Parameters: 
    são informações que envio pro servidor no final da url, começa com o carácter "?" e os pares chave/valor são separadas por um "&"
    obs.: query significa indagar

    No envio de um form o método padrão/default é o método GET, e ele vai adicionar as informações que serão enviadas ao servidor na url no formato de query string

    Fazer uma simulação de request no próprio site da API

    http://dataservice.accuweather.com/locations/v1/cities/search?apikey=OBFDwL3Pq3cOgKpRXH8VsJA38kI60M47&q=fortaleza

*/

const APIKey = 'OBFDwL3Pq3cOgKpRXH8VsJA38kI60M47';

//prettier-ignore
const getCityUrl = cityName => 
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

// criar um função async pra poder trabalhar com o await

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName);
        const response = await fetch(cityUrl); // pra pegar o objeto response já parseado

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados');
        }

        // console.log(await response.json()); // não vou precisar trabalhar com todos os objetos do array, apenas o primeiro que é o match
        const [cityData] = await response.json(); // fazer destructuring de array, pra evitar a sintaxe cityData[0]
        // debugger; // MUITO LEGAL USAR DEBUGGER PRA VER OS VALORES QUE AS VARIÁVEIS ARMAZENAM
        console.log(cityData); // essa const armazena apenas o objeto da posição 0 do array que foi retornado na expressão await response.json()

        return cityData; // retornar apenas a posição 0 do array, destructuring, e o valor da propriedade KEY que esse objeto armazena será importante/necessário para o próximo request
    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
};

getCityData('Fortaleza'); // vai mostrar vários objetos no console, mas deve-se observar que o primeiro objeto do array é o que realmente dá o match, os outros tem informações nada a ver no AdministrativeArea

// PRIMEIRO FAÇO FUNCIONAR DEPOIS REFATORO

/* 
- copia toda a função acima e ajustar pra que ela faça o request pro outro endpoint
*/

const getCityWeather = async cityName => {
    try {
        // const cityData = await getCityData(cityName);
        // como await getCityData(cityName) contém um objeto, posso fazer um destructuring pra pegar apenas a propriedade Key
        const { Key } = await getCityData(cityName);
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`; // adicionar &language=pt-br, que não é obrigatório, pra obter a resposta em português Brasil... resp. do EXERCÍCIO 06
        const response = await fetch(cityWeatherUrl);

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados');
        }

        const [cityWeatherData] = await response.json(); // fazer destructuring de array, pra evitar a sintaxe cityWeatherData[0]
        // debugger;

        return cityWeatherData; // pra que possamos pegar a KEY que será necessária para o próximo request
    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
};

// resp. EXERCÍCIO 07: observar que as duas funções tem o código semelhante e fazem praticamente a mesma coisa mudando só a url no qual é feito o request, então deve-se criar um função genérica invés de duplicar as funções getCityData e getCityWeather, ver a resposta deste exercício no arquivo weather.js

// dicas:
/*
- renomear a função sem especificar quais dados ela vai buscar, getCityData para fetchData
- remover tudo que for específico da getCityData e deixar só o que for genérico 
*/
