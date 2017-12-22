const Koa = require('koa');
const app = new Koa();

const fs = require('fs');

app.use(async function (ctx, next) {
  const paths = await fs.readdirSync('docs');
  console.log(paths);
  const files = await Promise.all(paths.map(path => fs.readFileSync(`docs/${path}`, 'utf8')));

  ctx.type = 'markdown';
  ctx.body = files.join('');
});

app.listen(3000);
