// //The API key
const key = "8mzXYqzki50xpNOZKWIY38zOCrAwuk2X";

// get weather information
const getWeather = async (id) => {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`;

  const response = await fetch(url);
  const data = await response.json();

  return data[0];
};

// get city information
const getCity = async (city) => {
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;

  const response = await fetch(url);
  const data = await response.json();

  return data[0];
};
