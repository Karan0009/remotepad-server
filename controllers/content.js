const { ResponseMessages } = require("../constants/messages");
const { redisKeys } = require("../constants/redisKeys");
const redisClient = require("../utils/redis");

const getContent = async (req, res) => {
  let response;
  try {
    const redisContent = await redisClient.get(redisKeys["text"]);
    response = {
      code: res.statusCode,
      data: redisContent,
      error: null,
      message: ResponseMessages["getSuccess"],
      success: true,
    };
  } catch (err) {
    res.statusCode = 400;
    response = {
      code: res.statusCode,
      data: null,
      error: err,
      message: ResponseMessages["getError"],
      success: false,
    };
  }
  res.json(response);
};

const addContent = async (req, res) => {
  let response;
  try {
    const reqBody = req.body;
    console.log(reqBody);
    const redisSetStatus = await redisClient.set(
      redisKeys["text"],
      reqBody.Data
    );
    console.log(redisSetStatus);
    // const redisContent = await redisClient.get(redisKeys["text"]);
    if (redisSetStatus !== "OK")
      throw new Error("error in setting data to the database");
    response = {
      code: res.statusCode,
      data: redisSetStatus,
      error: null,
      message: ResponseMessages["postSuccess"],
      success: true,
    };
  } catch (err) {
    res.statusCode = 500;
    response = {
      code: res.statusCode,
      data: null,
      error: err,
      message: ResponseMessages["postError"],
      success: false,
    };
  }
  res.json(response);
};

module.exports = { getContent, addContent };
