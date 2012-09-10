function SearchBox(){}
SearchBox.prototype.DOM = function(){
	var self = this;
	var form = document.createElement('form');
	form.id  = "user-handle-form";
	var inputBox = document.createElement('input');
	inputBox.id = "userhandle";
	var submit = document.createElement('input');
	submit.type = "submit";
	form.appendChild(inputBox);
	form.appendChild(submit);
	form.addEventListener("submit",function(e){
	 	e.preventDefault();
	 	self.onsubmit();
	 });
	return form;
}
SearchBox.prototype.onsubmit = function() {
}
