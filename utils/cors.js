const enableCors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
  );
  next();
};
module.exports = enableCors;
