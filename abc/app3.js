const Koa = require('koa');
const app = new Koa();
const log = require('./logger.js');

//X-Response-Time

app.use(async(ctx, next)=>{
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
})

//logger
//app.use(log.logger());
app.use(log.logger(':method :url'));


//response
app.use(async ctx=>{
  ctx.body = 'Hello Anna';
});

app.listen(3000);
