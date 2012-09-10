function TweetList(){
	this.tweetContainer = [];
	this.selector = "tweet-list-container";
}
TweetList.prototype.addTweets = function(arr){
	for(var i=0; i<arr.length; i++){
		this.tweetContainer.push(arr[i]);
	}
	this.tweetContainer.sort(function(a,b){
		return (a.time - b.time) ;
	});
	this.update();
}
TweetList.prototype.displayTweet = function(){
	for(var i=0; i<this.tweetContainer.length; i++){
		var tweet = this.tweetContainer[i];
		if(!(tweet.hasOwnProperty('domElement')) ){
			var dom = this.tweetContainer[i].DOM();
			document.getElementById(this.selector).appendChild(dom);				
		}
	}
}
TweetList.prototype.filterOnTag = function(tag){
	this.displayTweet();
}
TweetList.prototype.update = function(){
	this.displayTweet();
}
