const { createProxyMiddleware } = require("http-proxy-middleware");

const GPT_API_KEY = process.env.REACT_APP_GPT_API_KEY;

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.openai.com",
      changeOrigin: true,
      headers: {
        Authorization: `Bearer ${GPT_API_KEY}`,
        "Content-Type": "application/json",
      },
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
