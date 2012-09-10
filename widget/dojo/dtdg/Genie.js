dojo.provide("dtdg.Genie");
//define the object
dtdg.Genie = function() {}
dojo.extend(dtdg.Genie, {
	_predictions : [
	"As I see it, yet"
	],
	initialize : function() {
		var label = document.createElement("p");
		label.innerHTML = "Ask a question. The genie knows the answer...";
		var question = document.createElement("input");
		question.size = 50;
		var button = document.createElement("button");
		button.innerHTML = "Ask!";
		button.onclick = function() {
			alert(dtdg.Genie.prototype._getPrediction( ));
			question.value = "";
		}
		var container = document.createElement("div");
		container.appendChild(label);
		container.appendChild(question);
		container.appendChild(button);
		dojo.body().appendChild(container);
	},
	_getPrediction : function() {
		var idx = 0;
		return this._predictions[idx];
	}
});