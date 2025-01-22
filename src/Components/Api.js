const apiKey = "52a27df9d7fbf7d173e60d655a90ddf5";

const getWeather = async (city)=>{
    let base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let data = await fetch(base_url);
    let parsed_data = await data.json();

    return parsed_data;
}

export const getCurrentLocation = async (lat, lon)=>{
    let base_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let data = await fetch(base_url);
    let parsed_data = await data.json();

    return parsed_data;
}

export default getWeather;