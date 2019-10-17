
const fs = require("fs");
const path = require("path");
const { promisity } = require("util");

//promise
const readFile = promisify(fs.readFile);

module.exports = function(dir,option){
    return async (ctx,next)=>{
    	const view = require(option.extension);

    	ctx.render = async(filename,data) => {
    	    //async
    	    let tmpl = await readFile(path.join(dir,`${filename}.${option.extension}`),"utf8");

    	    let pageStr = view.render(tmpl,data);

    	    ctx.set("Content-Type","text/html;charset=utf8");
    	    ctx.body = pageStr;
    	}

    	await next();
    }
}
