
const Koa = require("Koa");
const Router = require("@koa/router");

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`1---`);
    await next();
    console.log(`2---`);
});


const router = new Router();

// router.get("/abc", (ctx, next) => {
//     ctx.body = "abc";
// });
//
// router.get("/kfo", (ctx, next) => {
//     ctx.body = "kfo";
// });

//http://localhost:3000/wdo
router.get("/wdo", (ctx, next) => {
    ctx.body = "wdo";
})

router.get('use', '/used/:id', (ctx, next) => {
 ctx.body = "use";
});

router.url('use', 3);
// => "/users/3"

//Multiple middleware
router.get(
	'/users/:id',
	(ctx, next) => {
    console.log("user1");
	},
	ctx => {
	 console.log("user2");
	}
);

//console.log(router.routes())
// 调用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
  console.log(`running at localhost:3000`)
});
