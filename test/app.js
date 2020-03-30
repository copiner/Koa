const http = require('http');

let a1 = async (ctx, next) => {
    console.log(`1---`);
    await next();
    console.log(`2---`);
}


let a2 = async (ctx, next) => {
    console.log(`3---`);
    await next();
    console.log(`4---`);
}

let a3 = async (ctx, next) => {
    console.log(`5---`);
    await next();
    console.log(`6---`);

}

//洋葱

let context = 'ct4';

let middleware = [a1,a2,a3];

function dispatch (i) {
  let fn = middleware[i]

  if (i === middleware.length) return
  //console.log(dispatch(i + 1))

  fn( context, dispatch.bind(null, i + 1)/*next*/ )

}

dispatch(0)


// function composed (context) {
//   return dispatch(0)
//
//   function dispatch (i) {
//     let fn = middleware[i]
//     if (i === middleware.length) return
//
//     return fn(context, dispatch.bind(null, i + 1)) ;//dispatch(i+1)
//
//   }
// }

//composed()

// function end(){
//   return composed(context).then().catch()
// }
// end()

//http.createServer(end()).listen();
