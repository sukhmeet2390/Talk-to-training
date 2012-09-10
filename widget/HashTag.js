function HashTag(text, userhandle){
	this.tag = text;
	this.active  = false;
	this.count = 1;
	this.userhandle = userhandle;
}
HashTag.prototype.DOM = function(){
	var self = this;
	var aTag = document.createElement('a');
	aTag.innerHTML = this.tag +"(" +this.count+")&nbsp;&nbsp;";
	var tag = this.tag;

	aTag.onclick = function(){
		self.active = true;
		tweetList.filterOnTag(self.tag);
	}	
	this.domElement = aTag;
	return this.domElement;
}
HashTag.prototype.updateDOM = function(){
	this.domElement.innerHTML = this.tag +"(" +this.count+")&nbsp;&nbsp;";
	return this.domElement;		
}