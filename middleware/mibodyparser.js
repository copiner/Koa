const querystring = require("querystring");

module.export = function badyParser(){
    return async (ctx,next)=> {
	await new Promise((resolve,reject)=>{
	    let dataArr = [];

	    ctx.req.on("data",data => dataArr.push(data));

	    ctx.req.on("end",()={
		let contentType = ctx.get("Content-Type");

		let data = Buffer.concat(dataArr).toString();

		if(contentType === "application/x-www-form-urlencoded"){
		    ctx.request.body = querystring.parse(data);
		} else if(contentType === "applaction/json"){
		    ctx.request.body = JSON.parse(data);
		}

		resolve();
	    });
	});

	await next();
    }
}
