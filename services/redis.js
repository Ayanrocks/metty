const
  redis = require('redis');

const client = redis.createClient({
  port: process.env.REDIS_PORT, // redis port to connect
  host: process.env.REDIS_HOST, // hostanme or IP address
});

// Event listener for any error during redis transaction
client.on('error', (error) => {
  console.error(error);
});

// Set value to Redis DB for cache storage
export function setToRedis(key, value) {
  return client.SET(key, value, (err) => {
    if (err) {
      return err;
    }
    return true;
  });
}

// Get Value from redis from key
export function getToRedis(key) {
  return client.GET(key, (err, data) => {
    if (err) {
      return err;
    }
    return data;
  });
}
