// CÓDIGO QUE INTERAGE COM DOM

// obs.: Lembrar que o app.js tem acesso as funções e variáveis do weather.js
// É necessário fazer dois requests, pois o objeto que a getCityWeather retorna não possui o nome da cidade

// getCityData, pra obter o chave e o nome da cidade, que são as propriedades obj.Key e a obj.LocalizedName
// getCityWeather, pra obter as informações do clima da cidade, que são as propriedades obj.WeatherText e obj.Temperature.Metric.Value

const cityForm = document.querySelector('[data-js="change-location"]'); // copiar e colar do html, colando dentro de []

// criar três cursores pra ir digitando as const logo abaixo de forma mais produtiva
const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
//prettier-ignore
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
// debugger

const cityCard = document.querySelector('[data-js="city-card"]');
// debugger

let timeImg = document.querySelector('[data-js="time"]');
// observar que esse objeto/HTMLImageElement tem uma propriedade src, que armazena o src atual do elemento
// colocar como let e não como const, pra indicar que vai sofre reatribuições de valor
// debugger

const timeIconContainer = document.querySelector('[data-js="time-icon"]'); // pra armazenar a div que vai conter a img com o ícone

cityForm.addEventListener('submit', async event => {
    // transformar em uma função async por conta do uso do await, que serve pra desencapsular uma promise
    event.preventDefault();
    console.log('ok, form enviado!'); // pra testar se a função de callback está sendo executada no envio do form

    const inputValue = event.target.city.value;
    console.log(inputValue);

    const [{ Key, LocalizedName }] = await getCityData(inputValue); // fazer destructuring no objeto cityData
    // console.log(cityData);
    console.log(Key, LocalizedName);

    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
        await getCityWeather(Key); // fazer destructuring no objeto cityWeather, evitar destructuring aninhado
    // ler a documentação da API pra saber que existe a propriedade IsDayTime que retorna um boolean e a propriedade WeatherIcon que armazena um numero que corresponde ao ícone da condição climática, no menu do site AccuWeather: GENERAL INFO -> WeatherIcon, vai de 1 a 44
    // ATENÇÃO: a função getCityWeather, não vai mais precisar fazer dois request, pois já adquiri o valor da propriedade Key na invocação logo acima, então devo mudar o código da função getCityWeather e da função getWeatherUrl lá no arquivo weather.js
    // console.log(getCityWeather);
    console.log(WeatherText, Temperature.Metric.Value);

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"></img>`; // Por que foi feito com HTML template e não com document.createElement?
    // Acredito que seja porque com HTML template a gente consegue em uma linha apenas já criar a tag e definir os seus atributos

    console.log(cityCard.classList); // DOMTokenList, como não é array não vai ter o método .includes() e sim o método .contains()
    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none');
    }

    if (IsDayTime) {
        timeImg.src = './src/day.svg';
    } else {
        timeImg.src = './src/night.svg';
    }
    // caminho absoluto (é melhor): ./
    // o ponto de partida da busca pelo svg é a raiz do documento, o svg vai ser encontrado independente se eu mudar ou não app.js de lugar
    // caminho relativo: ../
    // o ponto de partida da busca pelo svg é o arquivo app.js, caso mudemos o arquivo app.js de pasta o svg não será encontrado

    timeIconContainer.innerHTML = timeIcon;

    cityNameContainer.textContent = LocalizedName;
    cityWeatherContainer.textContent = WeatherText;
    cityTemperatureContainer.textContent = Temperature.Metric.Value;

    cityForm.reset();
});
