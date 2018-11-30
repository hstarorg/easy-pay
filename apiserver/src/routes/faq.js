const KoaRouter = require('koa-router');

const router = new KoaRouter({
  prefix: `/faq`
});

router.get('/', ctx => (ctx.body = 'ok'));

module.exports = {
  router
};
