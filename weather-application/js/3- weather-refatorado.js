const APIKey = 'OBFDwL3Pq3cOgKpRXH8VsJA38kI60M47';
const baseUrl = 'http://dataservice.accuweather.com/'; // util pra diminuir o tamanho da linha da string e as repetições desnecessária

// padronização do código, obtendo as url através de funções
const getCityUrl = cityName =>
    `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getWeatherUrl = ({ Key }) =>
    `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`;

// FUNÇÃO GENÉRICA PRA FAZER REQUESTS
const fetchData = async url => {
    try {
        // console.log('kkkkkkkkkk'); // pra verificar que o try está sendo executado no caso de erro também
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados'); // se error, não vai retornar valor e função que não retorna valor, retorna undefined
        }

        return await response.json();
    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
};

const getCityData = cityName => fetchData(getCityUrl(cityName)); // fetchData retorna uma promise já que toda função async retorna uma promise

const getCityWeather = async cityName => {
    // transformar a função em async pra poder usar o await
    const [cityData] = await getCityData(cityName); // não recebe mais um objeto e sim um array de objetos agora

    return fetchData(getWeatherUrl(cityData));
};

getCityData('curitiba').then(console.log); // estou passando uma função de callback como argumento do then, por isso que funciona
getCityData('curitiba').then(value => console.log({ value })); // pra verificar que o undefined que estava aparecendo no console em caso de erro é o retorno da função fetchData, que devido ao throw não teve seu return logo abaixo executado e função que não retorna um valor retorna undefined

getCityWeather('recife').then(console.log);

// -----------------------------------------------------------------------------

// CÓDIGO ANTIGO

// const getCityWeather = async cityName => {
//     try {
//         const { Key } = await getCityData(cityName);
//         const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`;
//         const response = await fetch(cityWeatherUrl);

//         if (!response.ok) {
//             throw new Error('Não foi possível obter os dados');
//         }

//         const [cityWeatherData] = await response.json();
//         debugger;
//         return cityWeatherData;
//     } catch ({ name, message }) {
//         alert(`${name}: ${error}`);
//     }
// };

// getCityWeather('fortaleza');
