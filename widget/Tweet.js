function Tweet(obj){
	function convertToSeconds(timeStamp){
		var date = new Date(timeStamp.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,"$1 $2 $4 $3 UTC"));
		 //Mon Sep 03 08:23:15 +0000 2012  -> Mon Sep 03 2012 13:53:15 GMT+0530 
		return date.getTime();
	}
	function parseHashTag(arr){
		var hash = [];
		for(var i =0;i<arr.length;i++){
			hash.push(arr[i].text);
		}
		return hash;
	}
	this.user = obj.user.screen_name;
	this.content = obj.text;
	this.time = Math.floor(convertToSeconds(obj.created_at)/1000);
	this.isActive = true;
	this.hashtags = parseHashTag(obj.entities.hashtags);
 }
Tweet.prototype.DOM = function(){
 	var divTag = document.createElement('li');
	divTag.innerHTML = this.content;
	this.domElement = divTag;
	return this.domElement;
}
Tweet.prototype.showTweet = function(){
	this.domElement.style.display = "list-item";
}

Tweet.prototype.hideTweet = function(){
	this.domElement.style.display = "none";
}