const Koa = require('koa');
const app = new Koa();

//app.context

//app.context is the prototype from which ctx is created from,You may add additional properties to ctx by editing app.context.
//This is useful for adding properties or methods to ctx to be used across your entire app,
//which may be more performant (no middleware) and/or easier (fewer require()s) at the expense of relying more on ctx,
//which could be considered an anti-pattern.

//For example, to add a reference to your database from ctx:

// app.context.db = db();
//
// app.use(async ctx => {
//   console.log(ctx.db);
// });


//Note
//Many properties on ctx are defined using getters, setters, and Object.defineProperty().
//You can only edit these properties (not recommended) by using Object.defineProperty() on app.context.
//Mounted apps currently use its parent's ctx and settings. Thus, mounted apps are really just groups of middleware.

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
//The app.listen(...) method is simply sugar for the following:

// const http = require('http');
// const Koa = require('koa');
// const app = new Koa();
// http.createServer(app.callback()).listen(3000);
