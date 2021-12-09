const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/admin',
        createProxyMiddleware({
            target: 'https://app.zetamail.vn',
            changeOrigin: true,
            cookieDomainRewrite: true
        })
    );
    app.use('/api',
        createProxyMiddleware({
            target: 'https://app.zetamail.vn',
            changeOrigin: true,
            cookieDomainRewrite: true
        })
    );
};