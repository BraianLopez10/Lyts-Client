const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "http://127.0.0.1:4000/auth/google",
      secure: false,
    })
  );
};
