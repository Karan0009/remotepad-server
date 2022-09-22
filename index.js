const express = require("express");
const contentRouter = require("./routes/content");
const logger = require("./utils/logger");
const redisClient = require("./utils/redis");
const enableCors = require("./utils/cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.urlencoded());
app.use(logger);
app.use(express.json());
app.use(enableCors);

app.get("/say-hello", async (req, res) => {
  res.send("Hello World");
});

app.use("/api", contentRouter);

app.listen(port, async () => {
  console.log("Server started on port:", port);
  await redisClient.connect();
  console.log("Connected to redis!");
});

process.on("SIGINT", () => {
  redisClient.quit();
  console.log("redis client closed");
  process.exit(0);
});
