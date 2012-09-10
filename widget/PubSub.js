util.PubSub = {};
(function () {
	var uid, topics, pbsb;
	uid = 0;
	topics = {};
	pbsb = {};

	pbsb.subscribe = function (topic,func,context){
		if(!topics.hasOwnProperty(topic)){
			topics[topic] = {};
		}
		topics[topic][++uid] = {func: func, context: context};
		return uid;
	} 

	pbsb.unsubscribe = function(topic,id){
		if(topics[topic][id]){
			delete topics[topic][id];
		}
	}

	pbsb.publish = function(topic, activity){
		var key;
		if(topics.hasOwnProperty(topic)){
			for(key in topics[topic]){
				var obj = topics[topic][key];
				var func = obj.func;
				var context = obj.context;
				func.apply(context,[activity]);
			}
		}
	}
	pbsb.topics = function(){
		return topics;
	}
	window.util.PubSub = pbsb;
})();