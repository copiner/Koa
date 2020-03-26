## koa2中间件

koa2的中间件是通过async await实现,一个很简单的中间件实现如下
```
async function logger(ctx, next) {
  const startDate = new Date();
  next();
  console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() -startDate}ms`);
}

```
这是一个处理完一条网络请求后会打印应对的请求方式,状态码,花费时间。 中间件包含两个参数 ctx, next。


ctx作为上下文使用,包括基本的ctx.request和ctx.response另外koa通过delegates这个库对request, response一些常用属性或者方法,做了很多代理操作,可以直接通过ctx访问得到,比如request.url可以写成ctx.url。除此之外,koa还约定了一个中间件的存储空间ctx.state通过这个state可以储存一些的数据,比如用户数据,另外类似koa-views这些渲染view层的中间件也会默认把ctx.state里面的属性作为view的上下文传入。

另外一个参数next,上面也讲过,他的作用是将处理的控制权交给下一个中间件,next()后面的代码会在后面中间件执行结束后执行。

还有,因为中间件是按顺序执行,所以中间件的顺序也非常重要,另外路由执行顺序也是一样,因为都是通过中间件实现,所以路由的话应该把,容易匹配到的放在后面.

比如路由规则包含了/all和/:id那么对/all处理的中间件应该放在/:id之前。

### koa2的中间件实现

```
const app = new Koa();
app.use(logger)
```

koa实例对象app包含了一个数组属性middleware,通过use方法,将中间件push到数组中,源码如下
```
use(fn) {
  if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
  if (isGeneratorFunction(fn)) {
    deprecate('Support for generators will be removed in v3. ' +
              'See the documentation for examples of how to convert old middleware ' +
              'https://github.com/koajs/koa/blob/master/docs/migration.md');
    fn = convert(fn);
  }
  debug('use %s', fn._name || fn.name || '-');
  this.middleware.push(fn);
  return this;
}
```
