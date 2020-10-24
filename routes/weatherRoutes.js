const { getWeatherOfCity } = require("../services/weatherApi");
const { setToRedis, getFromRedis } = require("../services/redis");

module.exports = (app) => {
  // Ping route that return if server is online
  app.get("/ping", (req, res) => {
    res.json({ Status: "working" });
  });

  // weather forecast route to fetch and add to redis for cache
  app.get("/api/v1/getForecast/:location", async (req, res) => {
    const { location } = req.params;
    try {
      const data = await getFromRedis(location.toLowerCase());
      if (data) {
        res.json(JSON.parse(data));
      } else {
        getWeatherOfCity(location.toLowerCase())
          .then((r) => {
            if (r !== "Request failed with status code 404") {
              setToRedis(location.toLowerCase(), JSON.stringify(r));
            }
            res.json(r);
          })
          .catch((e) => {
            res.send(e);
          });
      }
    } catch (error) {
      res.send(error);
    }
  });
};
