// CÓDIGO QUE INTERAGE COM A API

const APIKey = 'OBFDwL3Pq3cOgKpRXH8VsJA38kI60M47';
const baseUrl = 'http://dataservice.accuweather.com/';

// padronização do código, obtendo as url através de funções
const getCityUrl = cityName =>
    `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

// const getWeatherUrl = ({ Key }) =>
//     `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`;

// ***função ajustada***
const getWeatherUrl = cityKey =>
    `${baseUrl}/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`;

// FUNÇÃO GENÉRICA PRA FAZER REQUESTS
const fetchData = async url => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados');
        }

        return await response.json(); // pode-se tirar o await daqui?
    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
};

const getCityData = cityName => fetchData(getCityUrl(cityName));

// const getCityWeather = async cityName => {
//     const [cityData] = await getCityData(cityName);

//     return fetchData(getWeatherUrl(cityData));
// };

// ***função ajustada***
// OBS.: só vai valer a pena usar o await quando eu for invocar essa função, já que ela vai sempre ter que retornar uma promise mesmo
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey));
// ctrl + click na função pra ir até a declaração dela ou ctrl + alt + click pra abrir a declaração da função numa aba lateral

// getCityWeather('recife').then(console.log); // não vou precisar mais, era apenas teste
