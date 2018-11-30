const path = require('path');
const fastKoa = require('fast-koa');
const config = require('./config');

fastKoa.initApp({ routesPath: path.join(__dirname, 'routes'), enableResponseTime: true, enableLogger: true });

fastKoa
  .listen(config.port)
  .then(server => {
    const addr = server.address();
    console.log(`Server started...`, addr);
  })
  .catch(console.error);
