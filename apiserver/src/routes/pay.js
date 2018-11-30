const KoaRouter = require('koa-router');
const config = require('../config');

const router = new KoaRouter({
  prefix: `${config.apiVersion}/pay`
});

module.exports = {
  router
};
