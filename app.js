const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.response.body = 'Hello World';
});

app.listen(3000);
