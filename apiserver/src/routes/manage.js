const KoaRouter = require('koa-router');
const config = require('../config');

const router = new KoaRouter({
  prefix: `${config.apiVersion}/manage`
});

router.get('/', ctx => (ctx.body = 'ok'));

module.exports = {
  router
};
