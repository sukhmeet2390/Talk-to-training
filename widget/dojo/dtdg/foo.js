dojo.provide("dtdg.foo");
dtdg.foo.fibonacci = function(x){
	if(x<0) throw Exception("Illegal Exception");
	if(x<=1) return x;
	return dtdg.foo.fibonacci(x-1) + dtdg.foo.fibonacci(x-2);
}