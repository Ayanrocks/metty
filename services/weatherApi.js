const axios = require("axios");
const { WEATHER_API_KEY } = process.env;

/* getWeatherOfCity returns a promise that resolves to
 * the weather data or an error occurred
 * @param: cityName: string
 * @return: Promise<any>
 */
const getWeatherOfCity = async (cityName) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_API_KEY}`
      )
      .then((r) => {
        if (r.status === 200) {
          resolve(r.data);
        }
        reject({});
      })
      .catch((e) => {
        reject(e.message);
      });
  });
};

module.exports = {
  getWeatherOfCity,
};
