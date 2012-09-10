window.onload = function (){
	var searchBox = new SearchBox();
	util.connect(searchBox, "onsubmit", newUserEntered);
	document.getElementById("user-handle-form-container").appendChild(searchBox.DOM());
}
userList = new UserList();
tweetList = new TweetList();
hashTagList = new HashTagList();
filter = new Filter();

function newUserEntered(){
	function fetchTweets(userhandle,callback){
		var url = "http://localhost/server.php?username="+userhandle;
		var jsonObject = util.makeAjaxCall("GET",url,callback);
	}
	function getTweetsObjectArray(jsonObject){
		var tweets = [];
		for(var i=0; i<10; i++){
			var tweetObject = new Tweet(jsonObject[i]);
			tweets.push(tweetObject);
		}
		return tweets;
	}

	var userhandle = document.getElementById("userhandle").value;
	userList.addUser(userhandle);
	fetchTweets(userhandle,function(jsonObject){
		if(jsonObject){
			var tweetsArr = getTweetsObjectArray(jsonObject);
			tweetList.addTweets(tweetsArr);	
		}	
	});	
}