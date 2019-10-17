
class Layer{
    constructor(path,cb){
    	this.path = path;
    	this.cb = cb;
    }
    match(path){
	     return path === this.path;
    }
}

class Router{
    constructor(){
	     this.layers = [];
    }
    get(path,cb){
	     this.layers.push(new Layer(path,cb));
    }
    compose(ctx,next,handlers){
  	     function dispath(index){
  	        if(index >= handlers.length) return next();
  	         handlers[index].cb(ctx,()=>dispatch(index + 1));
      	}
      	dispatch(0);
    }
    routes(){
  	  return async (ctx,next){
  	    let handlers = this.layers.filter(layer => layer.natch(ctx.path));
  	    this.compose(ctx,next,handlers);
    }
}
