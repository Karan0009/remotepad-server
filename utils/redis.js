const { createClient } = require("redis");
// import { promisifyAll } from "bluebird";

// promisifyAll(redis);
const redisClient = createClient({
  // socket: {
  //   host: "redis-15456.c264.ap-south-1-1.ec2.cloud.redislabs.com", // process.env.REDIS_HOSTNAME,
  //   port: 15456, // parseInt(process.env.REDIS_PORT || "") || 0,
  // },
  url: "redis://redis-15456.c264.ap-south-1-1.ec2.cloud.redislabs.com:15456",
  username: "default",
  password: "vnNVb6cjfCgWGNMSvtbbhCCl0ar4N5gW", //process.env.REDIS_PASSWORD,
});

redisClient.on("error", (err) => {
  console.log("redis error occured", err);
});

module.exports = redisClient;
