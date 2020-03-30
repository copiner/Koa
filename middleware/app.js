const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {//(ctx, nextMiddleware)
    console.log(ctx);
    console.log(`1---`);
    await next();
    console.log(`2---`);
});

app.use(async (ctx, next) => {
    console.log(`3---`);
    await next();
    console.log(`4---`);
});

app.use(async (ctx, next) => {
    console.log(`5---`);
    await next();
    console.log(`6---`);
});


//console.log(app.middleware)


//const response = require('./response');
//const request = require('./request');
/*
http.createServer((req, res) => {
  const ctx = this.createContext(req, res); request response 绑入ctx
  fnMiddleware(ctx).then(() => respond(ctx)).catch(onerror);
}).listen(3000)
*/

app.listen(3000);
