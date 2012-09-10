function Filter(){
	this.activeUsers = [];
	this.activeHash = "all";
	util.connect( tweetList, "filterOnTag", this, "saveHash");
	util.connect( tweetList, "update", this, "updateTweets");
}
Filter.prototype.getActiveUsers = function(){
	this.activeUsers = userList.getActiveUser();
}
Filter.prototype.saveHash = function(hash){
	this.activeHash = hash;
	this.updateTweets();
}
Filter.prototype.updateTweets = function(){
	this.getActiveUsers();
	for(var i =0; i<tweetList.tweetContainer.length; i++){
		var tweetObj = tweetList.tweetContainer[i];
		var hashtags = tweetList.tweetContainer[i].hashtags;
		var user = tweetObj.user;
		if(this.activeUsers.indexOf(user) == -1 ||(hashtags.indexOf(this.activeHash) == -1 && this.activeHash !="all") ){
			tweetObj.isActive = false;
			tweetObj.hideTweet();
		}else{
			tweetObj.isActive = true;
			tweetObj.showTweet();
		}
	}
}