var util = {};
util.connect = function(obj1, fn1, ob2, fn2){
	var oldmethod = obj1[fn1];
  	obj1[fn1] = function(){
    if(oldmethod != null){
    	oldmethod.apply(obj1, arguments);
    }
    if(typeof(ob2) == "function"){
    	ob2.apply(obj1);
    }else{
    	ob2[fn2].apply(ob2, arguments);	
    }    
  };
}
util.makeAjaxCall = function (methodtype,url,callbac){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open(methodtype,url, true);
		xmlhttp.onreadystatechange  = function(callback){
			if(xmlhttp.status !=200){
				alert("Error" +xmlhttp.status);
			}
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var response = xmlhttp.responseText;
				var jsonObject = JSON.parse(response);
				if(jsonObject.errors && jsonObject.errors[0].code == 34){
					alert("Error"+jsonObject.errors[0].code);
					return null;
				}else{
					callbac(jsonObject);
				}
			}
		}
		xmlhttp.send(null);		
}