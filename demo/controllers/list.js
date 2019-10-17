const render = require('../lib/render');

const add = async function add(ctx) {
  await ctx.render('new');
}
module.exports = add;

// nodejs 导入导出模块module.exports向外暴露多个模块 require导入模块

// .moudel.exports 导出模块


// 导出单个模块
// // user.js
// moudel.exports = 函数名或者变量名；
//
// //app.js
// 导入
// require('user.js')  当然.js可以省略 require('user');


// 导出多个模块


// //user.js
// var showForm = () =>{}  //箭头函数
// var subForm = function(){}
// ....
//
// module.exports.showForm = showForm;
// module.exports.subForm = subForm;
// 可简写
// module.exports = {
//   showForm: showForm,
//   subForm: subForm
// }
// 键值同名可以只写一个
// module.exports = {
//   showForm,
//   subForm
//   }
