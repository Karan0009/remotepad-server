const express = require("express");
const { addContent, getContent } = require("../controllers/content");

const contentRouter = express.Router();

contentRouter.get("/content", getContent);
contentRouter.post("/content", addContent);

module.exports = contentRouter;
