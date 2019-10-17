
const Koa = require("Koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/panda", (ctx, next) => {
    ctx.body = "panda";
});

router.get("/panda", (ctx, next) => {
    ctx.body = "pandashen";
});

router.get("/shen", (ctx, next) => {
    ctx.body = "shen";
})

// 调用路由中间件
app.use(router.routes());

app.listen(3000);
