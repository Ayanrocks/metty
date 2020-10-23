const express = require("express");
const dotenv = require("dotenv");
const app = express();
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

// Routes
require("./routes/weatherRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));

/* Things Planned
1. Probably convert this server to something more fast like Go
2. Use redis hashes to store objects instead of JSON.parse and JSON.stringify
3. Use the unsplash api to chnage the background image of the frontend according to the city
name passed
4. Add more features like graphs and rainfalls with hourly forecasts and also predictions on rainfall
or any other natural activities
*/
