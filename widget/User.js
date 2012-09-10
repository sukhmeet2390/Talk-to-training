function User(obj){
	this.username = obj.username;
	this.active = true;
}
User.prototype.DOM = function(){
	var self = this;
	var div = document.createElement('div');
	var checkBox = document.createElement('input');
	checkBox.type = "checkbox";
	checkBox.name = this.username;
	checkBox.checked = true;

	checkBox.onclick = function(){
		var userhandle = self.username;
		self.active = this.checked;
		tweetList.update();
	} 
	var span = document.createElement('span');
	span.innerText = this.username;
	div.appendChild(checkBox);
	div.appendChild(span);
	return div;
}
