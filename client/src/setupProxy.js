const { createProxyMiddleware }= require("http-proxy-middleware");
module.exports = function(app) {
try {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:4000',
          changeOrigin: true,
          // secure: false
        })
      );
} catch (error) {
    console.log(error.message);
}

};