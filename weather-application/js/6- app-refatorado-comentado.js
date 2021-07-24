// ATENÇÃO: ANTES DE REFATORAR PRECISO ENTENDER O QUE O CÓDIGO ESTÁ FAZENDO

const cityForm = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
//prettier-ignore
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="city-card"]');
let timeImg = document.querySelector('[data-js="time"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');

const showCityCard = () => {
    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none');
    }
};

// obs.: um ReferenceError vai ser lançado pra cada const que eu não declarei dentro dessa função
// MOVER TODAS AS CONST PRA DENTRO DA FUNÇÃO, exceto a inputValue pois depende do event submit
// receber inputValue como cityName
// dica.: caso essa aplicação cresça muito, talvez seja interessante separar as const em uma função que retorna um objeto com os dados
const showCityWeatherInfo = async cityName => {
    const [{ Key, LocalizedName }] = await getCityData(cityName);
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
        await getCityWeather(Key);
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"></img>`;

    timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg';
    timeIconContainer.innerHTML = timeIcon;
    cityNameContainer.textContent = LocalizedName;
    cityWeatherContainer.textContent = WeatherText;
    cityTemperatureContainer.textContent = Temperature.Metric.Value;
};

// não precisa ser mais uma função async, já tirei o código que tinha await de dentro dessa função
cityForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('ok, form enviado!');

    const inputValue = event.target.city.value;
    console.log(inputValue);

    // const [{ Key, LocalizedName }] = await getCityData(inputValue);

    // const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    //     await getCityWeather(Key);

    // const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"></img>`;

    // faz o card ser exibido na primeira vez
    // 2a REFATORAÇÃO: observar que ele não usa nenhuma const daqui e que ele não precisa está dentro desse submit, então invés de ler um if é melhor ler o nome de uma função que eu vou executar
    // if (cityCard.classList.contains('d-none')) {
    //     cityCard.classList.remove('d-none');
    // }

    showCityCard();

    // está checando se é dia ou noite
    // 1a REFATORAÇÃO: trocar o if/else por um ternário, juntar com as const que são manipulações do DOM
    // timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg';

    // if (IsDayTime) {
    //     timeImg.src = './src/day.svg';
    // } else {
    //     timeImg.src = './src/night.svg';
    // }

    // os valores são manipulações do DOM
    // 3a REFATORAÇÃO: o que é mais legível? ler cada atribuição dessas pra entender o que cada instrução está fazendo ou isolar eu isolar essas linhas em uma função showCityWeatherInfo e invocar essa função aqui no local dessas linhas
    // timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg';
    // timeIconContainer.innerHTML = timeIcon;
    // cityNameContainer.textContent = LocalizedName;
    // cityWeatherContainer.textContent = WeatherText;
    // cityTemperatureContainer.textContent = Temperature.Metric.Value;

    showCityWeatherInfo(inputValue); // fazer a invocação da função receber inputValue como argumento

    cityForm.reset();
});
