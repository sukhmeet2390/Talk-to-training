function UserList(){
	this.selector = "user-list-container";
	this.userContainer = [];
}
UserList.prototype.addUser = function(userhandle){
	var self = this;
	function checkExistence(userhandle){
		for(var i =0;i<self.userContainer.length;i++){
			if(self.userContainer[i].username == userhandle){return true;}
		}
		return false;
	}
	
	if(checkExistence(userhandle)){
		alert("user already exist");
	}else{
		var user  = new User ({username:userhandle});
		this.userContainer.push(user);
		document.getElementById(this.selector).appendChild(user.DOM());	
	}
}
UserList.prototype.getActiveUser = function(){
	var active = [];
	for(var i = 0 ; i< this.userContainer.length;i++){
		var userObj = this.userContainer[i];
		if(userObj.active == true){
			active.push(userObj.username);
		}
	}
	return active;
}