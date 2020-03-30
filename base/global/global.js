//node 文档 Global模块

console.log(__dirname);//当前路径
console.log(__filename);//当前在执行的js文件路径


//a.js
module.exports={};
//耻辱的使用了全局变量
global.varA = "abc";


//main.js
var c = require("./a");
console.log(global.varA);//使用global对象访问到"全局"变量


//b.js
module.exports = (function(){
    var _value = 1;//在函数内声明一个变量，作用域是函数内

    //返回的一个function能访问到_value，所以_value并不是global级别的变量，但是可以通过这个接口访问到
    return function(){
        return _value++;
    };

})();

var c = require("./b");

console.log(c());//1
console.log(c());//2
