function HashTagList(){
	this.hashtags = [];
	util.connect( tweetList, "addTweets", this, "addHashTags");
}
HashTagList.prototype.addHashTags = function(tweets){
	for(var i =0; i<tweets.length; i++){
		var hashtags = tweets[i].hashtags;
		var userhandle = tweets[i].user;
		for(var j=0; j<hashtags.length; j++){
			var obj = this.getHashObject(hashtags[j],userhandle);
			if(obj.count == 1) {this.hashtags.push(obj);} // new object
		}
	}
	this.printHash();
}
HashTagList.prototype.getHashObject = function(text,userhandle){
	for(var i = 0;i< this.hashtags.length;i++){
		if(this.hashtags[i].tag == text) {
			this.hashtags[i].count++;
			this.hashtags[i].updateDOM();
			return this.hashtags[i];
		}
	}
	return new HashTag(text,userhandle);
}
HashTagList.prototype.printHash = function(){
	for(var i=0; i<this.hashtags.length; i++){
		var hashtagObject = this.hashtags[i];
		if(!(hashtagObject.hasOwnProperty('domElement')) ){
			var dom = this.hashtags[i].DOM();
			document.getElementById("hash-list-container").appendChild(dom);				
		}
	}
}