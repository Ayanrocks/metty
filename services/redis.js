const redis = require("redis");

const client = redis.createClient({
  port: process.env.REDIS_PORT, // redis port to connect
  host: process.env.REDIS_HOST, // hostanme or IP address
});

client.on("connect", function () {
  console.log("Connected to Redis");
});

/* Event listener for any error during redis transaction
 */
client.on("error", (error) => {
  console.error(error);
});

/* Set value to Redis DB for cache storage
 * @param: (key: string)
 * @return: boolean
 */
function setToRedis(key, value) {
  client.SET(key, value, "EX", 60 * 60, function (err) {
    if (err) {
      console.error("Error Saving Data: ", err);
    }
  });
}

/* Get Value from redis from key
 * @param: (key: string)
 * @return: (data: stirng | error: Error)
 */
function getFromRedis(key) {
  return new Promise((resolve, reject) => {
    client.GET(key, (err, data) => {
      if (err) {
        reject(err);
      }
      console.log("Data", data);
      resolve(data);
    });
  });
}

module.exports = {
  getFromRedis,
  setToRedis,
};
